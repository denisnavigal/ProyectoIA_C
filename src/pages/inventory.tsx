import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { Product } from '../types';

const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Tomates',
    description: 'Tomates frescos para salsas',
    price: 25,
    quantity: 50,
    image: 'https://images.unsplash.com/photo-1546470427-e26264be0b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  // Add more products as needed
];

export function Inventory() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const handleAddProduct = (product: Product) => {
    setProducts([...products, { ...product, id: Date.now().toString() }]);
  };

  const handleEditProduct = (product: Product) => {
    setProducts(products.map((p) => (p.id === product.id ? product : p)));
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Inventario</h1>
          <button
            onClick={() => {
              setCurrentProduct(null);
              setIsEditing(true);
            }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Agregar Producto</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">Precio: ${product.price}</p>
                    <p className="text-gray-600">Cantidad: {product.quantity}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setCurrentProduct(product);
                        setIsEditing(true);
                      }}
                      className="p-2 text-amber-600 hover:text-amber-700"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="p-2 text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}