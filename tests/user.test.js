const user = require('../lib/user');
const userData = {
  email: 'kenu.heo@gmail.com',
  passwd: '',
  github: '',
};

describe('User', () => {
  it('should create a user', async () => {
    const result = await user.create(userData);
    expect(result.email).toBe(userData.email);
    user.remove(result.dataValues.id);
  });

  it('should get a user', async () => {
    const result = await user.create(userData);
    const row = await user.get(result.dataValues.id);
    expect(row.email).toBe(userData.email);
    user.remove(result.dataValues.id);
  });
});