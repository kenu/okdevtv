require('dotenv').config()
const { Sequelize } = require('sequelize')
const AccountModel = require('./Account')
const ChannelModel = require('./Channel')
const VideoModel = require('./Video')
const TranscriptModel = require('./Transcript')
const UserVideoModel = require('./UserVideo')
const UserChannelModel = require('./UserChannel')

// Create sequelize instance - support both databases
const sequelize = new Sequelize(
  process.env.DB_NAME || 'devdb',
  process.env.DB_USER || 'devuser',
  process.env.DB_PASS || 'devpass',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mariadb',
    timezone: 'Asia/Seoul',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  }
)

const Account = AccountModel(sequelize)
const Channel = ChannelModel(sequelize)
const Video = VideoModel(sequelize)
const Transcript = TranscriptModel(sequelize)
const UserVideo = UserVideoModel(sequelize)
const UserChannel = UserChannelModel(sequelize)

// Associations
Channel.belongsTo(Account, { foreignKey: 'accountId', targetKey: 'accountId' })
Channel.hasMany(Video)
Video.belongsTo(Channel)

Transcript.belongsTo(Video, { as: 'video', foreignKey: 'videoId' })
Video.hasOne(Transcript, { as: 'transcripts', foreignKey: 'videoId' })

Account.belongsToMany(Video, { through: UserVideo })
Video.belongsToMany(Account, { through: UserVideo })

Account.belongsToMany(Channel, { through: UserChannel })
Channel.belongsToMany(Account, { through: UserChannel })

// Synchronize models with the database
if (process.env.NODE_ENV !== 'production') {
  ;(async () => {
    try {
      await sequelize.sync()
      console.log('Database synchronized')
    } catch (error) {
      console.error('Error synchronizing database:', error)
    }
  })()
}

const db = {
  sequelize,
  Sequelize,
  Account,
  Channel,
  Video,
  Transcript,
  UserVideo,
  UserChannel,
}

module.exports = db
module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize
module.exports.Account = Account
module.exports.Channel = Channel
module.exports.Video = Video
module.exports.Transcript = Transcript
module.exports.UserVideo = UserVideo
module.exports.UserChannel = UserChannel
