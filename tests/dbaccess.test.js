const { sequelize } = require('../lib/db')

test('dbaccess and get db current time', async () => {
  const [results, metadata] = await sequelize.query('SELECT NOW()', {
    type: sequelize.QueryTypes.SELECT,
  })
  console.log(results)
  expect(results[0]).not.toBe(null)
})
