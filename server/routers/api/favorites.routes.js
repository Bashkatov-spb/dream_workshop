const router = require('express').Router();
const { Favorite, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    if (res.locals.user) {
      const favorites = await Favorite.findAll({
        where: { user_id: res.locals.user.id },
        include: Product,
      });
      const favoritesProducts = favorites.map((fav) => fav.Product);
      res.json({ message: 'success', favoritesProducts });
      return;
    }
    res.json({ message: 'У Вас нет ничего в избранном', favoritesProducts: [] });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    if (res.locals.user) {
      const { productId } = req.body;
      await Favorite.create({
        product_id: productId,
        user_id: res.locals.user.id,
      });
      const favoriteProduct = await Product.findOne({ where: { id: productId } });
      res.json({ message: 'success', favoriteProduct });
      return;
    }
    res.json({ message: 'Что-то пошло не так' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await Favorite.destroy({
      where: { product_id: productId, user_id: res.locals.user.id },
    });
    if (result > 0) {
      res.json({ message: 'success', productId });
      return;
    }
    res.json({ message: 'У вас не прав доступа' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
