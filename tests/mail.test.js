const mail = require('../lib/mail');

test('mail test', () => {
  const email = process.env.BASE_MAIL;
  const message = 'test message';
  mail.send(email, message).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.error(err);
  });
})
