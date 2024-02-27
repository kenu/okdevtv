const { sequelize, Model, DataTypes } = require('../lib/db')
class Bookmark extends Model {}
Bookmark.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: true,
    },
    pathname: DataTypes.STRING,
  },
  { sequelize, modelName: 'bookmark' }
)

async function create(data) {
  await sequelize.sync()
  const row = await Bookmark.create(data)
  console.log(row.toJSON())
  return row
}

async function get(id) {
  await sequelize.sync()
  const row = await Bookmark.findByPk(id)
  console.log(row.toJSON())
  return row
}

async function remove(id) {
  await sequelize.sync()
  const row = await Bookmark.destroy({
    where: {
      id: id,
    },
  })
  return row
}

module.exports = {
  create,
  get,
  remove,
}
