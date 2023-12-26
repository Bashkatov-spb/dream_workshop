const router = require('express').Router();

const authApiRouter = require('./api/auth.routes');
const productsApiRouter = require('./api/products.routes');
const favoritesProductsRouter = require('./api/favorites.routes');

router.use('/api/auth', authApiRouter);
router.use('/api/products', productsApiRouter);
router.use('/api/favorites', favoritesProductsRouter);

module.exports = router;
