const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const UserChannel = sequelize.define('UserChannel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  })

  return UserChannel
}
