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
    <div>
      ProductAddForm
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
    </div>
  );
};

export default ProductAddForm;
