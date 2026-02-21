import { Product } from "../types/product";

export const mockProducts: Product[] = [
  {
      id: 1,
      name: "Fresh Bananas",
      weight: "1 dozen",
      price: 49,
      oldPrice: 60,
      discount: 18,
      image: "/products/banana.png",
    },
  {
      id: 2,
      name: "Amul Toned Milk",
      weight: "500 ml",
      price: 28,
      oldPrice: 30,
      discount: 7,
      image: "/products/milk.png",
    },
    {
      id: 3,
      name: "Lay's Classic Salted",
      weight: "52g",
      price: 20,
      image: "/products/lays.png",
    },
    {
      id: 4,
      name: "Coca-Cola Original",
      weight: "750 ml",
      price: 40,
      oldPrice: 45,
      discount: 11,
      image: "/products/pepsi.png",
    },
    {
      id: 5,
      name: "Maggi 2-Minute Noodles",
      weight: "70g",
      price: 14,
      image: "/products/maggi.png",
    },
    {
      id: 6,
      name: "Red Apples (Shimla)",
      weight: "1 kg",
      price: 180,
      oldPrice: 220,
      discount: 18,
      image: "/products/apple.png",
    },
  // other products
];