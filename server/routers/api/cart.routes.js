const router = require('express').Router();
const { Cart, Order, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const order = await Order.findOne({ where: { user_id: res.locals.user.id, status: 'open' } });
    if (order) {
      const cart = await Cart.findAll({ where: { order_id: order.id }, include: Product });
      const products = cart.map((el) => el.Product);
      res.json({ message: 'success', products });
      return;
    }
    res.json({ message: 'В корзине пусто', products: [] });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  let order;
  try {
    const { productId } = req.body;
    order = await Order.findOne({ where: { user_id: res.locals.user.id, status: 'open' } });
    if (order) {
    } else {
      order = await Order.create({ user_id: res.locals.user.id, status: 'open' });
    }
    const cartItem = await Cart.findOne({ where: { order_id: order.id, product_id: productId } });
    if (cartItem) {
      cartItem.count += 1;
      await cartItem.save();
    } else {
      await Cart.create({ order_id: order.id, product_id: productId, count: 1 });
    }

    const cartProduct = await Product.findOne({ where: { id: productId } });

    res.json({ message: 'success', cartProduct });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:productId', async (req, res) => {
  const { productId } = req.params;
  let order;
  try {
    order = await Order.findOne({ where: { user_id: res.locals.user.id, status: 'open' } });
    const result = await Cart.destroy({ where: { order_id: order.id, product_id: productId } });
    if (result > 0) {
      res.json({ message: 'success', productId });
      return;
    }
    res.json({ message: 'Что-то пошло не так!! ' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
