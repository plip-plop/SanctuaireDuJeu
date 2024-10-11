export interface Product {
  id: number;
  title: string;
  description: string;
  photo: string;
  price: number;
  stock: number;
}

export interface BasketItem {
  id: number;
  title: string;
  price: number;
}
