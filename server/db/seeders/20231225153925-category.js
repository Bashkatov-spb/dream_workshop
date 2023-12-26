'use strict';
const { Category, Product } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Category.bulkCreate(
      [
        {
          type: 'Воск',
          Products: [
            {
              title: 'Продукт 1',
              image: 'image_url_1.jpg',
              cost: 100,
              description: 'Описание продукта 1',
            },
            {
              title: 'Продукт 2',
              image: 'image_url_2.jpg',
              cost: 150,
              description: 'Описание продукта 2',
            },
            {
              title: 'Продукт 3',
              image: 'image_url_3.jpg',
              cost: 200,
              description: 'Описание продукта 3',
            },
            {
              title: 'Продукт 4',
              image: 'image_url_4.jpg',
              cost: 250,
              description: 'Описание продукта 4',
            },
            {
              title: 'Продукт 5',
              image: 'image_url_5.jpg',
              cost: 300,
              description: 'Описание продукта 5',
            },
          ],
        },
        {
          type: 'Гипс',
          Products: [
            {
              title: 'Продукт 6',
              image: 'image_url_6.jpg',
              cost: 350,
              description: 'Описание продукта 6',
            },
            {
              title: 'Продукт 7',
              image: 'image_url_7.jpg',
              cost: 400,
              description: 'Описание продукта 7',
            },
            {
              title: 'Продукт 8',
              image: 'image_url_8.jpg',
              cost: 450,
              description: 'Описание продукта 8',
            },
            {
              title: 'Продукт 9',
              image: 'image_url_9.jpg',
              cost: 500,
              description: 'Описание продукта 9',
            },
            {
              title: 'Продукт 10',
              image: 'image_url_10.jpg',
              cost: 550,
              description: 'Описание продукта 10',
            },
          ],
        },
      ],
      {
        include: [Product],
      }
    );
  },

  async down() {
    await Category.destroy({ truncate: { cascade: true } });
  },
};
