import emailjs from "@emailjs/browser";

const COMPANY_SHORT_NAME = "NEST Equipment";
const COMPANY_TAGLINE = "Powering Reliable Operations Across the UAE";
const COMPANY_EMAIL = "info@nest-rental.ae";
const COMPANY_PHONE = "+971 56 507 0050";
const COMPANY_WEBSITE = "www.nest-rental.ae";
const BRAND_PRIMARY = "#cf0022";
const BRAND_DARK = "#0c0d12";
const BRAND_MUTED = "#6b7280";

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function nl2br(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

export function buildContactEmailSubject(data: ContactFormData): string {
  const projectType = data.projectType.trim();

  if (projectType) {
    return `${COMPANY_SHORT_NAME} Inquiry: ${projectType}`;
  }

  return `${COMPANY_SHORT_NAME} Inquiry`;
}

export function buildContactEmailHtml(data: ContactFormData): string {
  const company = data.companyName.trim() || "N/A";
  const projectType = data.projectType.trim() || "Not specified";
  const submittedAt = new Date().toLocaleString("en-AE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dubai",
  });

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: ${BRAND_MUTED}; width: 140px; border-bottom: 1px solid #ececec; vertical-align: top;">${label}</td>
      <td style="padding: 12px 16px; font-size: 14px; color: #111827; border-bottom: 1px solid #ececec;">${value}</td>
    </tr>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(buildContactEmailSubject(data))}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f3f4f6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; border-collapse: collapse; overflow: hidden; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color: ${BRAND_DARK}; padding: 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="height: 4px; background-color: ${BRAND_PRIMARY}; font-size: 0; line-height: 0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="padding: 28px 32px 24px;">
                    <table role="presentation" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 16px;">
                          <div style="width: 48px; height: 48px; background-color: ${BRAND_PRIMARY}; border-radius: 8px; text-align: center; line-height: 48px; font-size: 28px; font-weight: 800; color: #ffffff; font-family: Arial, Helvetica, sans-serif;">N</div>
                        </td>
                        <td style="vertical-align: middle;">
                          <p style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 0.5px;">${COMPANY_SHORT_NAME}</p>
                          <p style="margin: 6px 0 0; font-size: 12px; color: #9ca3af; letter-spacing: 0.3px;">${COMPANY_TAGLINE}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="background-color: #ffffff; padding: 28px 32px 8px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; color: ${BRAND_PRIMARY}; text-transform: uppercase; letter-spacing: 1px;">New Inquiry</p>
              <h1 style="margin: 0 0 8px; font-size: 22px; font-weight: 700; color: #111827;">Contact Form Submission</h1>
              <p style="margin: 0; font-size: 13px; color: ${BRAND_MUTED};">Received on ${escapeHtml(submittedAt)} (UAE)</p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="background-color: #ffffff; padding: 16px 32px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #ececec; border-radius: 8px; overflow: hidden;">
                ${row("Full Name", escapeHtml(data.fullName))}
                ${row("Company", escapeHtml(company))}
                ${row("Email", `<a href="mailto:${escapeHtml(data.email)}" style="color: ${BRAND_PRIMARY}; text-decoration: none;">${escapeHtml(data.email)}</a>`)}
                ${row("Phone", `<a href="tel:${escapeHtml(data.phone.replace(/\s/g, ""))}" style="color: ${BRAND_PRIMARY}; text-decoration: none;">${escapeHtml(data.phone)}</a>`)}
                ${row("Project Type", escapeHtml(projectType))}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="background-color: #ffffff; padding: 20px 32px 32px;">
              <p style="margin: 0 0 10px; font-size: 13px; font-weight: 700; color: ${BRAND_MUTED}; text-transform: uppercase; letter-spacing: 0.8px;">Message</p>
              <div style="background-color: #f9fafb; border-left: 4px solid ${BRAND_PRIMARY}; padding: 16px 18px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.7; color: #374151;">
                ${nl2br(data.message)}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${BRAND_DARK}; padding: 24px 32px;">
              <p style="margin: 0 0 12px; font-size: 14px; font-weight: 700; color: #ffffff;">${COMPANY_SHORT_NAME}</p>
              <p style="margin: 0 0 16px; font-size: 12px; color: #9ca3af; line-height: 1.6;">
                M-38, Mussafah Industrial Area<br />
                Abu Dhabi, United Arab Emirates
              </p>
              <p style="margin: 0; font-size: 12px; line-height: 1.8;">
                <a href="mailto:${COMPANY_EMAIL}" style="color: ${BRAND_PRIMARY}; text-decoration: none;">${COMPANY_EMAIL}</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="tel:+971565070050" style="color: #d1d5db; text-decoration: none;">${COMPANY_PHONE}</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://${COMPANY_WEBSITE}" style="color: #d1d5db; text-decoration: none;">${COMPANY_WEBSITE}</a>
              </p>
              <p style="margin: 16px 0 0; font-size: 11px; color: #6b7280;">
                This email was sent from the contact form on ${COMPANY_WEBSITE}.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const toEmail = process.env.NEXT_PUBLIC_TO_EMAIL;

  if (!serviceId || !templateId || !publicKey || !toEmail) {
    throw new Error("Email service is not configured. Please contact us directly at info@nest-rental.ae.");
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      to_email: toEmail,
      from_name: data.fullName,
      reply_to: data.email,
      subject: buildContactEmailSubject(data),
      message_html: buildContactEmailHtml(data),
    },
    { publicKey }
  );
}
