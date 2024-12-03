import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">El Buen Sabor</h1>
            <p className="text-xl mb-8">Descubre el auténtico sabor de la cocina mexicana</p>
            <Link
              to="/menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2"
            >
              <UtensilsCrossed className="h-5 w-5" />
              <span>Ver Menú</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Comida Tradicional</h3>
              <p className="text-gray-600">Recetas auténticas transmitidas por generaciones</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Ingredientes Frescos</h3>
              <p className="text-gray-600">Seleccionamos los mejores ingredientes locales</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Ambiente Familiar</h3>
              <p className="text-gray-600">Un espacio acogedor para toda la familia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}