import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import type { RootState } from '../../../redux/store';
import ProductAddForm from './ProductAddForm';
import type { Category } from '../types/type';
import '../styles/products.scss';
import '../styles/formAdd.scss';
import Footer from '../../footer/components/Footer';

const ProductsList = (): JSX.Element => {
  const [category, setCategory] = useState(0);

  const products = useSelector((store: RootState) => store.products.products);
  const user = useSelector((store: RootState) => store.auth.user);
  const categories = new Map();
  products.forEach((product) => {
    const categoryType = product.Category.type;
    if (!categories.has(categoryType)) {
      categories.set(categoryType, product.Category);
    }
  });

  const uniqueCategories = Array.from(categories.values()) as Category[];

  const filteredProducts =
    category === 0 ? products : products.filter((product) => product.category_id === category);

  return (
    <div className="products__container">
      <h3 className="products__title">Категории</h3>
      <select className="products__select" onChange={(e) => setCategory(+e.target.value)} id="">
        <option className="products__option" value="все">
          Все товары
        </option>
        {uniqueCategories.map((el) => (
          <option className="products__option" key={el.id} value={el.id}>
            {el.type}
          </option>
        ))}
      </select>

      {user?.isAdmin && <ProductAddForm uniqueCategories={uniqueCategories} />}
      <div className="products__items">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsList;
