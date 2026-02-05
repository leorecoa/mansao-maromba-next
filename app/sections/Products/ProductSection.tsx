import React from 'react';

interface ProductSectionProps {
  products?: any[];
  activeTheme?: any;
}

export default function ProductSection({ products, activeTheme }: ProductSectionProps) {
  return (
    <section id="produtos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Nossos Produtos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product) => (
            <div key={product.id} className="bg-black/50 rounded-lg p-6 border border-yellow-400/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 mb-4">
                {product.description}
              </p>
              <div className="text-2xl font-bold text-white">
                R$ {product.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}