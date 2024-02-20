const mail = require('../lib/mail');

test('mail test', async () => {
  const email = process.env.BASE_MAIL;
  const message = 'test message';
  await mail.send(email, message);
});
