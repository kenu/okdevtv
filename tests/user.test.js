const user = require('../lib/user');
const userData = {
  email: 'kenu.heo@gmail.com',
  passwd: '',
  github: '',
};

describe('User', () => {
  it('should create a user', async () => {
    const result = await user.create(userData);
    console.log('aa', result.dataValues.id);
    expect(result.email).toBe(userData.email);
    user.remove(result.dataValues.id);
  });

  it('should get a user', async () => {
    const result = await user.create(userData);
    console.log(result.dataValues.id);
    const row = await user.get(result.dataValues.id);
    expect(row.email).toBe(userData.email);
    user.remove(result.dataValues.id);
  });
});
