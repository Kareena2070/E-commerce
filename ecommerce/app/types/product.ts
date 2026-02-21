export type Product = {
  id: number;
  name: string;
  weight: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
};