const { sequelize, Model, DataTypes } = require('../lib/db')
const notify = require('../lib/notify')

class User extends Model {}
User.init(
  {
    email: { type: DataTypes.STRING, unique: true },
    passwd: DataTypes.STRING,
    github: DataTypes.STRING(2000),
  },
  { sequelize, modelName: 'user' }
)

async function create(data) {
  await sequelize.sync()
  const row = await User.create(data)
  notify(row.dataValues.email + ' 님이 가입했습니다.')
  return row
}

async function get(id) {
  await sequelize.sync()
  const row = await User.findByPk(id)
  return row
}

async function getByEmail(email) {
  await sequelize.sync()
  const row = await User.findOne({
    where: {
      email: email,
    },
  })
  return row
}

async function findAll() {
  await sequelize.sync()
  const rows = await User.findAll()
  return rows
}

async function update(data) {
  await sequelize.sync()
  const row = await User.update(data, {
    where: {
      id: data.id,
    },
  })
  return row
}

async function remove(id) {
  await sequelize.sync()
  const row = await User.destroy({
    where: {
      id: id,
    },
  })
  return row
}

async function removeAll() {
  await sequelize.sync()
  const row = await User.destroy({
    where: {},
    truncate: true,
  })
  return row
}

module.exports = {
  create,
  get,
  getByEmail,
  findAll,
  update,
  remove,
  removeAll,
}
