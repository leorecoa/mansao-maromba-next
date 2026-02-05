'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Theme {
  primary: string;
  secondary: string;
  glow: string;
  text: string;
  bg: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  volume: string;
  type: string;
  theme: Theme;
}

const DEFAULT_THEME: Theme = {
  primary: '#facc15',
  secondary: '#111827',
  glow: 'rgba(250, 204, 21, 0.4)',
  text: '#FFFFFF',
  bg: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
};

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Combo Tigrinho',
    price: 149.90,
    description: 'Energia pura para quem busca resultados extremos.',
    image_url: 'https://i.imgur.com/2CMQ6GJ.png',
    volume: '700ml',
    type: 'Combo',
    theme: DEFAULT_THEME
  }
];

interface AppContextType {
  activeTheme: Theme;
  cartCount: number;
  activeIndex: number;
  products: Product[];
  setActiveIndex: (index: number) => void;
  handleOpenCart: () => void;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<Theme>(DEFAULT_THEME);
  const [cartCount, setCartCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [products] = useState<Product[]>(mockProducts);

  useEffect(() => {
    if (products.length > 0 && products[activeIndex]?.theme) {
      setActiveTheme(products[activeIndex].theme);
    }
  }, [activeIndex, products]);

  const handleOpenCart = () => {
    console.log('Abrir carrinho');
  };

  return (
    <AppContext.Provider value={{
      activeTheme,
      cartCount,
      activeIndex,
      products,
      setActiveIndex,
      handleOpenCart,
      setCartCount
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  return context;
}