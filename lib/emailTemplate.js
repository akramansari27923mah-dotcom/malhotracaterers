export const emailTemplate = ({
  name,
  email,
  phone,
  eventType,
  message,
  date,
  eventLocation,
  nog,
  budget,
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden;">

          <div style="background:#f59e0b; padding:25px; text-align:center;">
            <h1 style="color:white; margin:0;">
              Malhotra Caterers Kanpur
            </h1>
            <p style="color:white; margin-top:8px;">
              New Event Inquiry
            </p>
          </div>

          <div style="padding:30px;">
            <h2 style="color:#111827;">
              Event Details
            </h2>

            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:12px; font-weight:bold;">
                  Name:
                </td>
                <td>${name}</td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold;">
                  Email:
                </td>
                <td>${email}</td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold;">
                  Phone:
                </td>
                <td>${phone}</td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold;">
                  Event Type:
                </td>
                <td>${eventType}</td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold;">
                  Event Date:
                </td>
                <td>${date}</td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold;">
                  Event Location:
                </td>
                <td>${eventLocation}</td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold;">
                  Number of Guests:
                </td>
                <td>${nog}</td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold;">
                  Event Budget:
                </td>
                <td>${budget}</td>
              </tr>
            </table>

            <div style="margin-top:20px;">
              <h3>Message</h3>

              <div
                style="
                  background:#f9fafb;
                  padding:15px;
                  border-radius:8px;
                  border-left:4px solid #f59e0b;
                "
              >
                ${message}
              </div>
            </div>
          </div>

          <div
            style="
              background:#111827;
              color:white;
              text-align:center;
              padding:20px;
            "
          >
            <p style="margin:0;">
              Malhotra Caterers Kanpur
            </p>

            <p style="margin-top:8px;">
              Wedding Catering • Corporate Events • Event Management
            </p>
          </div>

        </div>
      </body>
    </html>
  `;
};
