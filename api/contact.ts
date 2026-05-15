import {
  type ContactPayload,
  type ContactResponse,
  normalizeContactPayload,
  validateContactPayload,
} from "../src/lib/contact";

interface VercelRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  on(event: "data", callback: (chunk: Buffer) => void): void;
  on(event: "end", callback: () => void): void;
  on(event: "error", callback: (error: Error) => void): void;
}

interface VercelResponse {
  status(statusCode: number): VercelResponse;
  setHeader(name: string, value: string): void;
  json(body: ContactResponse): void;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader("Allow", "POST");

  if (request.method !== "POST") {
    response.status(405).json({
      ok: false,
      message: "Method not allowed.",
    });
    return;
  }

  const rawBody = request.body ?? (await readRawBody(request));
  const payload = normalizeContactPayload(parseRequestBody(rawBody, request.headers));
  const validation = validateContactPayload(payload);

  if (!validation.isValid) {
    response.status(400).json({
      ok: false,
      message: localizedMessage(payload, "Please review the required fields before submitting."),
      errors: validation.errors,
    });
    return;
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    response.status(500).json({
      ok: false,
      message: localizedMessage(payload, "Contact email is not configured yet."),
    });
    return;
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "info@air-aroma.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Air Aroma Website <onboarding@resend.dev>";

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject: `Air Aroma contact form: ${payload.reason}`,
      text: buildPlainTextEmail(payload),
    }),
  });

  if (!resendResponse.ok) {
    response.status(502).json({
      ok: false,
      message: localizedMessage(payload, "We could not send the message right now."),
    });
    return;
  }

  response.status(200).json({
    ok: true,
    message: localizedMessage(payload, "Thank you. Your message has been sent."),
  });
}

function parseRequestBody(
  body: unknown,
  headers: VercelRequest["headers"],
): Record<string, unknown> {
  if (typeof body === "object" && body !== null && !Buffer.isBuffer(body)) {
    return body as Record<string, unknown>;
  }

  const contentType = headerValue(headers["content-type"]);
  const raw = Buffer.isBuffer(body) ? body.toString("utf8") : String(body || "");

  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return {};
    }
  }

  const params = new URLSearchParams(raw);
  return Object.fromEntries(params.entries());
}

function readRawBody(request: VercelRequest) {
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = [];

    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

function buildPlainTextEmail(payload: ContactPayload) {
  return [
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Company: ${payload.company || "-"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "-"}`,
    `Country: ${payload.country}`,
    `State/Region: ${payload.state}`,
    `Reason: ${payload.reason}`,
    `Newsletter: ${payload.subscribe ? "Yes" : "No"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

function localizedMessage(payload: ContactPayload, englishMessage: string) {
  if (payload.locale !== "ar") {
    return englishMessage;
  }

  const messages: Record<string, string> = {
    "Please review the required fields before submitting.":
      "يرجى مراجعة الحقول المطلوبة قبل الإرسال.",
    "Contact email is not configured yet.": "إرسال البريد غير مهيأ بعد.",
    "We could not send the message right now.": "تعذر إرسال الرسالة الآن.",
    "Thank you. Your message has been sent.": "شكراً لك. تم إرسال رسالتك.",
  };

  return messages[englishMessage] ?? englishMessage;
}

function headerValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value.join(";") : value ?? "";
}

