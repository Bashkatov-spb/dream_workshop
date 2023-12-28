export type CartState = {
  cartProducts: CartProduct[];
  error: undefined | string;
};

export type CartProduct = {
  id: number;
  title: string;
  image: string;
  cost: number;
  description: string;
};

export type CartProductsLoadResponse = {
  products: CartProduct[];
  message: string;
};
