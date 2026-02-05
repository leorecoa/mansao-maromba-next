import React from 'react';

interface CartModalProps {
  activeTheme?: any;
  onCheckout?: () => void;
}

export default function CartModal({ activeTheme, onCheckout }: CartModalProps) {
  return (
    <div className="hidden">
      {/* Modal do carrinho - implementar depois */}
    </div>
  );
}