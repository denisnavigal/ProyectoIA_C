import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UtensilsCrossed, LogIn, UserPlus, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/auth-store';

export function Navbar() {
  const { user, isAuthenticated, setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-amber-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8" />
            <span className="font-bold text-xl">El Buen Sabor</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/menu" className="hover:text-amber-200">Menú</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="hover:text-amber-200">
                  Dashboard
                </Link>
                {user?.role === 'WORKER' && (
                  <Link to="/inventory" className="hover:text-amber-200">
                    Inventario
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-amber-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Salir</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-1 hover:text-amber-200"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Iniciar Sesión</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center space-x-1 hover:text-amber-200"
                >
                  <UserPlus className="h-5 w-5" />
                  <span>Registrarse</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}