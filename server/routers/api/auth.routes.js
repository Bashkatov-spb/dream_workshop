const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const cookiesConfig = require('../../config/cookiesConfig');
const generateTokens = require('../../utils/authUtils');

router.post('/registration', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  if (
    name.trim() === '' &&
    login.trim() === '' &&
    avatar.trim() === '' &&
    email.trim() === '' &&
    password.trim() === ''
  ) {
    res.json({ message: 'Заполните все поля' });
    return;
  }
  try {
    let userInDb;
    userInDb = await User.findOne({ where: { email } });
    if (userInDb) {
      res.json({ message: 'Этот email уже занят' });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    userInDb = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const { accessToken, refreshToken } = generateTokens({
      user: { id: userInDb.id, email: userInDb.email, name: userInDb.name },
    });

    res
      .cookie(cookiesConfig.refresh, refreshToken, {
        maxAge: cookiesConfig.maxAgeRefresh,
        httpOnly: true,
      })
      .cookie(cookiesConfig.access, accessToken, {
        maxAge: cookiesConfig.maxAgeAccess,
        httpOnly: true,
      })
      .json({ message: 'success', user: userInDb });
  } catch ({ message }) {
    console.log(message);
  }
});

router.post('/authorization', async (req, res) => {
  try {
    const { email, password } = req.body;

    const userInDb = await User.findOne({ where: { email } });
    const compare = await bcrypt.compare(password, userInDb.password);
    if (compare) {
      const { accessToken, refreshToken } = generateTokens({
        user: { id: userInDb.id, email: userInDb.email, name: userInDb.name },
      });
      res
        .cookie(cookiesConfig.refresh, refreshToken, {
          maxAge: cookiesConfig.maxAgeRefresh,
          httpOnly: true,
        })
        .cookie(cookiesConfig.access, accessToken, {
          maxAge: cookiesConfig.maxAgeAccess,
          httpOnly: true,
        })
        .json({ message: 'success', user: userInDb });
    }
  } catch ({ message }) {
    res.json({ message: 'error' });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('access').clearCookie('refresh').json({ message: 'success' }); // серверное удаление куки по имени
});

router.get('/check', async (req, res) => {
  if (res.locals.user) {
    const user = await User.findOne({ where: { email: res.locals.user.email } });
    res.json({ user });
  }
  res.end();
});
module.exports = router;
