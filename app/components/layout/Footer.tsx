import React from 'react';

interface FooterProps {
  activeTheme?: any;
}

export default function Footer({ activeTheme }: FooterProps) {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            Mansão Maromba
          </h3>
          <p className="text-gray-400">
            © 2024 Mansão Maromba Distribuidora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}