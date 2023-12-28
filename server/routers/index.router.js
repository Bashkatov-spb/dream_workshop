const router = require('express').Router();

const authApiRouter = require('./api/auth.routes');
const productsApiRouter = require('./api/products.routes');
const favoritesProductsRouter = require('./api/favorites.routes');
const cartProductsRouter = require('./api/cart.routes');

router.use('/api/auth', authApiRouter);
router.use('/api/products', productsApiRouter);
router.use('/api/favorites', favoritesProductsRouter);
router.use('/api/cart', cartProductsRouter);

module.exports = router;
