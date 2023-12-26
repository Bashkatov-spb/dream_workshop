export type ProductState = {
  products: Product[];
  error: undefined | string;
};

export type Product = {
  id: number;
  title: string;
  image: string;
  cost: number;
  category_id: number;
  description: string;
  Category: Category;
};

export type ProductsLoadResponse = {
  products: Product[];
  message: string;
};
export type ProductAddResponse = {
  product: Product;
  message: string;
};
export type Category = {
  id: number;
  type: string;
};

export type ProductWithOutIdAndCategoryType = Omit<Product, 'id' | 'Category'>;

export type ProductWithOutId = Omit<Product, 'id'>;

export type ProductID = Product['id'];
