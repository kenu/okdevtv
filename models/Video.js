const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Video = sequelize.define('Video', {
    title: DataTypes.STRING,
    videoId: { type: DataTypes.STRING, unique: true },
    thumbnail: DataTypes.STRING,
    publishedAt: DataTypes.DATE,
  })

  return Video
}
