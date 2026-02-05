import React from 'react';

interface HeroProps {
  products: any[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function Hero({ products, activeIndex, setActiveIndex }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-yellow-400 mb-6">
          Mansão Maromba
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          A experiência definitiva em depósitos de bebidas digitais
        </p>
        <div className="text-yellow-400">
          Estética Urbana • Neon Nightlife • Performance Premium
        </div>
      </div>
    </section>
  );
}