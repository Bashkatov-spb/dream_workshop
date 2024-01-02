import React, { useState } from 'react';
import type { Category } from '../types/type';
import { useAppDispatch } from '../../../redux/store';
import { addProduct } from '../productsSlice';

const ProductAddForm = ({ uniqueCategories }: { uniqueCategories: Category[] }): JSX.Element => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState(1);

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    dispatch(addProduct({ title, image, cost: +cost, description, category_id: +categoryId }));
  };
  return (
    <div className="formAdd__container">
      <form className="formAdd__form" onSubmit={handleSubmit}>
        <div className="formAdd__input">
          <label>Название</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="formAdd__input">
          <label>Картинка</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="formAdd__input">
          <label>Стоимость</label>
          <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
        </div>
        <div className="formAdd__input">
          <label>Описание</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="formAdd__select">
          <label>Категория</label>
          <select onChange={(e) => setCategoryId(+e.target.value)}>
            {uniqueCategories.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.type}
              </option>
            ))}
          </select>
        </div>
        <button className="formAdd__button" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
