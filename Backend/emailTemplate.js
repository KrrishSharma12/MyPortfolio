const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });

export const generateContactEmail = ({
  name,
  email,
  subject,
  message,
}) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body style="margin:0;padding:0;background-color:#0b1120;font-family:Arial,Helvetica,sans-serif;color:#e2e8f0;">

    <div style="max-width:600px;margin:30px auto;padding:20px;">

      <!-- Header -->
      <div style="padding:20px 0;border-bottom:1px solid #334155;">
        <div style="font-size:14px;letter-spacing:2px;color:#818cf8;font-weight:bold;">
          KRISH SHARMA
        </div>

        <div style="font-size:12px;color:#94a3b8;margin-top:5px;">
          PORTFOLIO / CONTACT
        </div>
      </div>

      <!-- Introduction -->
      <div style="padding:30px 0 20px;">
        <div style="font-size:12px;color:#818cf8;letter-spacing:1px;">
          NEW INCOMING MESSAGE
        </div>

        <h1 style="font-size:28px;color:#ffffff;margin:15px 0;">
          You've got a new message.
        </h1>

        <p style="font-size:15px;line-height:24px;color:#94a3b8;">
          Someone reached out through your portfolio.
        </p>
      </div>

      <!-- Message Card -->
      <div style="background:#172033;border:1px solid #334155;border-radius:12px;padding:24px;">

        <!-- Sender -->
        <div style="font-size:16px;font-weight:bold;color:#ffffff;">
          ${safeName}
        </div>

        <div style="font-size:14px;color:#94a3b8;margin-top:8px;">
          ${safeEmail}
        </div>

        <div style="border-top:1px solid #334155;margin:24px 0;"></div>

        <!-- Subject -->
        <div style="font-size:11px;color:#94a3b8;letter-spacing:1px;">
          SUBJECT
        </div>

        <div style="font-size:15px;color:#ffffff;margin-top:10px;">
          ${safeSubject}
        </div>

        <div style="border-top:1px solid #334155;margin:24px 0;"></div>

        <!-- Message -->
        <div style="font-size:11px;color:#94a3b8;letter-spacing:1px;">
          MESSAGE
        </div>

        <div style="font-size:15px;line-height:26px;color:#e2e8f0;margin-top:15px;">
          ${safeMessage}
        </div>

      </div>

      <!-- Reply Button -->
      <div style="text-align:center;margin:30px 0;">
        <a href="mailto:${safeEmail}"
          style="display:inline-block;background:#6366f1;color:#ffffff;padding:14px 25px;text-decoration:none;border-radius:8px;font-size:14px;font-weight:bold;">
          Reply to sender
        </a>
      </div>

      <!-- Footer -->
      <div style="text-align:center;border-top:1px solid #334155;padding:20px 0;">
        <p style="font-size:13px;color:#64748b;">
          Sent via your personal portfolio.
        </p>

        <p style="font-size:12px;color:#475569;">
          Built with care · Krish Sharma
        </p>
      </div>

    </div>

  </body>
  </html>
  `;
};