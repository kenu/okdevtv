const sendToSlack = require('../lib/ajax');

test('axios', async () => {
  const text = 'Hello world!';
  const result = await sendToSlack(text + ' ' + Date.now());
  expect(result).toEqual('ok');
});
