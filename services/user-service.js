const user = require('../lib/user')

module.exports = {
  signupByGitHub: async function (github) {
    const email = github.email || github.login
    if (!email) {
      return 0
    }
    const result = await user.getByEmail(email)
    if (!result) {
      return (await user.create({ github: JSON.stringify(github), email }))
        .dataValues
    } else {
      const update = await user.update({
        github: JSON.stringify(github),
        id: result.dataValues.id,
      })
      if (update[0] === 1) {
        return result.dataValues
      }
    }
  },
}
