const { sequelize, Model, DataTypes } = require('../lib/db');

class User extends Model {}
User.init(
  {
    email: DataTypes.STRING,
    passwd: DataTypes.STRING,
    github: DataTypes.STRING,
  },
  { sequelize, modelName: 'user' }
);

async function create(data) {
  await sequelize.sync();
  const row = await User.create(data);
  console.log(row.toJSON());
  return row;
}

async function get(id) {
  await sequelize.sync();
  const row = await User.findByPk(id);
  return row;
}

async function findAll() {
  await sequelize.sync();
  const rows = await User.findAll();
  return rows;
}

async function remove(id) {
  await sequelize.sync();
  const row = await User.destroy({
    where: {
      id: id,
    },
  });
  return row;
}

module.exports = {
  create,
  get,
  findAll,
  remove,
};
