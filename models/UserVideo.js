const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const UserVideo = sequelize.define('UserVideo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  })

  return UserVideo
}
