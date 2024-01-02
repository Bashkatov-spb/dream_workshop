import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../../../redux/store';
import { deleteProduct, updateProduct } from '../productsSlice';
import type { Category } from '../types/type';
import { addCartProduct } from '../../cart/cartSlice';
import { addFavoriteProduct } from '../../favorites/favoritesSlice';
import Footer from '../../footer/components/Footer';

const ProductItemPage = (): JSX.Element => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState(1);

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

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    if (productId)
      dispatch(
        updateProduct({
          id: +productId,
          title,
          image,
          cost: +cost,
          description,
          category_id: +categoryId,
          Category: { id: 0, type: '' },
        }),
      );
  };

  const product = useSelector((store: RootState) => store.products.products).find(
    (prod) => productId && prod.id === +productId,
  );
  const onHandleRemove = (): void => {
    if (product) dispatch(deleteProduct(product.id));
  };

  const onHandleAddFavorite = (): void => {
    if (productId) dispatch(addFavoriteProduct(+productId));
  };

  const onHandleAddToCart = (): void => {
    if (productId) dispatch(addCartProduct(+productId));
  };
  return (
    <div>
      <h4>{product?.title}</h4>
      <img
        style={{ width: '300px' }}
        src="https://kartinki.pics/uploads/posts/2021-04/1617697486_19-p-boginya-lesa-art-kartinki-20.jpg"
        alt=""
      />
      <p>{product?.description}</p>
      <p>{product?.cost}</p>
      {user && (
        <>
          <button onClick={onHandleAddFavorite} type="button">
            Добавить в избранное
          </button>
          <button onClick={onHandleAddToCart} type="button">
            Добавить в корзину
          </button>
        </>
      )}
      {user?.isAdmin && (
        <button onClick={onHandleRemove} type="button">
          Удалить
        </button>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Название</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Картинка</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div>
          <label>Стоимость</label>
          <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
        </div>
        <div>
          <label>Описание</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Категория</label>
          <select onChange={(e) => setCategoryId(+e.target.value)}>
            {uniqueCategories.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.type}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default ProductItemPage;
