const jwtConfig = {
  // восковый билет
  access: {
    type: 'access',
    // живет 5 минут
    expiresIn: `${1000 * 60 * 5}`,
  },
  // чек
  refresh: {
    type: 'refresh',
    // 12 часов
    expiresIn: `${1000 * 60 * 60 * 12}`,
  },
};

module.exports = jwtConfig;
