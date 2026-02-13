"use client";

import Image from "next/image";
import { useState } from "react";

export default function Essentials() {
  const products = [
    {
      id: 1,
      name: "Maggi 2-Minute Noodles",
      weight: "70g",
      price: 14,
      image: "/products/maggi.png",
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
      name: "Red Apples (Shimla)",
      weight: "1 kg",
      price: 180,
      oldPrice: 220,
      discount: 18,
      image: "/products/apple.png",
    },
    {
      id: 4,
      name: "Lay's Classic Salted",
      weight: "52g",
      price: 20,
      image: "/products/lays.png",
    },
     {
      id: 5,
      name: "Fresh Bananas",
      weight: "1 dozen",
      price: 49,
      oldPrice: 60,
      discount: 18,
      image: "/products/banana.png",
    },
    {
      id: 6,
      name: "Coca-Cola Original",
      weight: "750 ml",
      price: 40,
      oldPrice: 45,
      discount: 11,
      image: "/products/pepsi.png",
    },
    
   
  ];

  const [cart, setCart] = useState<Record<number, number>>({});


  const increaseQty = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQty = (id: number) => {
    setCart((prev) => {
      const qty = (prev[id] || 0) - 1;
      if (qty <= 0) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: qty };
    });
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Dairy, Bread & Eggs</h2>
            <p className="text-sm text-gray-500">
              Daily essentials delivered fresh
            </p>
          </div>
          <button className="text-green-600 text-sm font-medium hover:underline">
            see all →
          </button>
        </div>

        {/* Product Scroll */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border p-3"

            >
              {/* Image Section */}
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                {/* Discount Badge */}
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
                    {product.discount}% OFF
                  </span>
                )}

                {/* Delivery Badge */}
                <span className="absolute bottom-2 left-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-md">
                  8 MINS
                </span>
              </div>

              {/* Product Info */}
              <div className="mt-3 space-y-1">
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.weight}</p>

                {/* Price Row */}
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="font-semibold text-sm">
                      ₹{product.price}
                    </p>
                    {product.oldPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        ₹{product.oldPrice}
                      </p>
                    )}
                  </div>

                  {/* Add / Stepper */}
                  {cart[product.id] ? (
                    <div className="flex items-center bg-green-600 text-white rounded-md">
                      <button
                        onClick={() => decreaseQty(product.id)}
                        className="px-2 py-1"
                      >
                        -
                      </button>
                      <span className="px-3 text-sm">
                        {cart[product.id]}
                      </span>
                      <button
                        onClick={() => increaseQty(product.id)}
                        className="px-2 py-1"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => increaseQty(product.id)}
                      className="border border-green-600 text-green-600 px-4 py-1 rounded-md text-sm font-medium hover:bg-green-50"
                    >
                      ADD
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
