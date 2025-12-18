const sendGridMail = require('@sendgrid/mail');

const apiKey = process.env.SENDGRID_API_KEY;
const recipients = process.env.RECIPIENTS ? process.env.RECIPIENTS.split(",").map(r => r.trim()) : [];
const templateId = process.env.SG_TEMPLATE_ID;
const fromEmail = process.env.FROM_EMAIL;

if (!apiKey) {
  console.error(`❌ Missing SENDGRID_API_KEY`);
  process.exit(1);
}

if (!templateId || !fromEmail) {
  console.error(`❌ Missing SG_TEMPLATE_ID or FROM_EMAIL repository environment variable`);
  process.exit(1);
}

if (recipients.length === 0) {
  console.error(`❌ No recipients set. Please define RECIPIENTS repository environment variable`);
  process.exit(1);
}

const msg = {
  to: recipients,
  from: process.env.FROM_EMAIL,
  templateId: process.env.SG_TEMPLATE_ID
};

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

(async () => {
  try {
    await sendGridMail.sendMultiple(msg);
    console.log('✔️ Release email successfully sent!');
  } catch (err) {
    console.error('❌ Failed to send release email:');
    console.error(err.response ? err.response.body : err.message);
    process.exit(1);
  }
})();
