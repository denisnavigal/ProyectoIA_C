import React from 'react';
import { useAuthStore } from '../store/auth-store';

export function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Bienvenido, {user?.name}
          </h2>
          <p className="text-gray-600">
            {user?.role === 'WORKER' 
              ? 'Accede al inventario para gestionar los productos.'
              : 'Explora nuestro menú y comparte tus opiniones.'}
          </p>
        </div>
      </div>
    </div>
  );
}