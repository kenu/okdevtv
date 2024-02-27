const { sequelize, Model, DataTypes } = require('../lib/db')

class UserCandidate extends Model {}
UserCandidate.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reset: DataTypes.STRING,
    finish: DataTypes.STRING,
  },
  { sequelize, modelName: 'user_candidate' }
)

async function create(data) {
  await sequelize.sync()
  const row = await UserCandidate.create(data)
  return row
}

async function get(id) {
  await sequelize.sync()
  const row = await UserCandidate.findByPk(id)
  return row
}

async function findAll() {
  await sequelize.sync()
  const rows = await UserCandidate.findAll()
  return rows
}

async function remove(id) {
  await sequelize.sync()
  const row = await UserCandidate.destroy({
    where: {
      id: id,
    },
  })
  return row
}

async function getByUuid(uuid) {
  await sequelize.sync()
  const row = await UserCandidate.findOne({
    where: {
      uuid: uuid,
    },
  })
  return row
}

async function getByEmailUuid(email, uuid) {
  await sequelize.sync()
  const row = await UserCandidate.findOne({
    where: {
      email: email,
      uuid: uuid,
    },
  })
  return row
}

async function update(userData) {
  await sequelize.sync()
  const row = await UserCandidate.update(userData, {
    where: {
      email: userData.email,
      finish: userData.finish,
    },
  })
  return row
}

module.exports = {
  create,
  get,
  findAll,
  remove,
  getByUuid,
  getByEmailUuid,
  update,
}
