import React from 'react';

interface AboutSectionProps {
  activeTheme?: any;
}

export default function AboutSection({ activeTheme }: AboutSectionProps) {
  return (
    <section id="sobre" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Sobre a Mansão Maromba
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-8">
            A experiência definitiva em depósitos de bebidas digitais, combinando estética urbana 
            com performance premium para a cultura nightlife de São Paulo.
          </p>
        </div>
      </div>
    </section>
  );
}