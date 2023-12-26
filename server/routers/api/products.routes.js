const router = require('express').Router();
const { Product, Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({ include: Category });
    res.json({ message: 'success', products });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, image, cost, category_id } = req.body;
    console.log(req.body);
    const newProduct = await Product.create({ title, description, image, cost, category_id });
    const product = await Product.findOne({ where: { id: newProduct.id }, include: Category });
    res.json({ message: 'success', product });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await Product.destroy({ where: { id: productId } });
    if (result > 0) {
      res.json({ message: 'success', data: productId });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const { title, description, image, cost, category_id } = req.body;
    await Product.update(
      { title, description, image, cost, category_id },
      { where: { id: productId } }
    );
    const product = await Product.findOne({ where: { id: productId }, include: Category });
    res.json({ message: 'success', data: product });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
