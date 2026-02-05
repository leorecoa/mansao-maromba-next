import React from 'react';

interface NavbarProps {
  theme?: any;
}

export default function Navbar({ theme }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-yellow-400">
            Mansão Maromba
          </div>
          <div className="flex items-center space-x-6">
            <a href="#produtos" className="text-white hover:text-yellow-400 transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="text-white hover:text-yellow-400 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-white hover:text-yellow-400 transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}