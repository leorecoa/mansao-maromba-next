import React from 'react';

interface ReviewSectionProps {
  reviews?: any[];
  activeTheme?: any;
}

export default function ReviewSection({ reviews, activeTheme }: ReviewSectionProps) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Avaliações
        </h2>
        <div className="text-center text-gray-300">
          <p>Em breve, avaliações dos nossos clientes.</p>
        </div>
      </div>
    </section>
  );
}