import React from 'react';

interface MapSectionProps {
  activeTheme?: any;
}

export default function MapSection({ activeTheme }: MapSectionProps) {
  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Localização
        </h2>
        <div className="text-center text-gray-300">
          <p>São Paulo - SP</p>
          <p>Em breve, mais informações de contato.</p>
        </div>
      </div>
    </section>
  );
}