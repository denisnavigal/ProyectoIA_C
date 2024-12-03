import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">El Buen Sabor</h3>
            <p className="text-amber-200">
              Disfruta de la mejor comida tradicional mexicana en un ambiente acogedor y familiar.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-amber-300" />
                <span>Av. Principal #123, Ciudad</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-amber-300" />
                <span>+52 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-amber-300" />
                <span>contacto@elbuensabor.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-2">
              <li>Lunes a Viernes: 9:00 - 22:00</li>
              <li>Sábados: 10:00 - 23:00</li>
              <li>Domingos: 10:00 - 21:00</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-amber-700 text-center">
          <p>&copy; {new Date().getFullYear()} El Buen Sabor. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}