const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

const recipients = process.env.RECIPIENTS ? process.env.RECIPIENTS.split(",").map(r => r.trim()) : [];
const templateId = process.env.SG_TEMPLATE_ID;
const fromEmail = process.env.FROM_EMAIL;

if (!templateId || !fromEmail) {
  console.error(`❌ Missing SG_TEMPLATE_ID or FROM_EMAIL repository environment variable`)
}

if (recipients.length === 0) {
  console.error(`❌ No recipients set. Please defined RECIPIENTS repository environment variable`)
}

const msg = {
  to: recipients,
  from: process.env.FROM_EMAIL,
  templateId: process.env.SG_TEMPLATE_ID
}

sendGridMail.sendMultiple(msg)
  .then(() => console.log(`✔️ Release email successfully sent!`))
  .catch(err => {
    console.error(`❌ Release email failed to send!`);
    process.exit(1);
  });
