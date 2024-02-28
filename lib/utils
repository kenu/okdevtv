const bcrypt = require('bcryptjs')

async function hashPassword(password) {
  const hashed = await hashPasswordInner(password)
  return hashed;
}

function hashPasswordInner(password) {
  const saltRounds = 10
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err)
      resolve(hash)
    })
  })
}

async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash)
}

module.exports = {
  hashPassword,
  comparePassword,
}
