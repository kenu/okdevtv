const { Transcript } = require('../models/index')

async function findTranscriptByVideoId(videoId) {
  return await Transcript.findOne({
    where: { videoId: videoId },
  })
}

async function createTranscript(data) {
  if (!data.videoId) {
    return
  }
  const one = await Transcript.findOne({
    where: { videoId: data.videoId },
  })
  if (!one) {
    const result = await Transcript.create(data)
    return result.toJSON()
  }
}

async function removeTranscript(videoId) {
  const one = await Transcript.findOne({
    where: { videoId: videoId },
  })
  if (one) {
    await one.destroy()
  }
}

module.exports = {
  findTranscriptByVideoId,
  createTranscript,
  removeTranscript,
}
