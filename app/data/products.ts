import type { Product } from '@/app/types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Combo Tigrinho',
    description: 'MANGA + MARACUJÁ. ENERGIA INTENSA QUE INCENDEIA A NOITE.',
    price: 89.90,
    image: 'https://i.imgur.com/iFgXsaT.png',
    volume: '1L',
    type: 'Cocktail Alcoólico Gaseificado',
    theme: {
      primary: '#ff0000',
      secondary: '#4b0000',
      glow: 'rgba(255, 0, 0, 0.8)',
      text: '#FFFFFF',
      bg: 'linear-gradient(180deg, #1a0000 0%, #000000 100%)',
    }
  },
  {
    id: '2',
    name: 'Double Darkness',
    description: 'PRETO FOSCO. MISTÉRIO E ELEGÂNCIA PARA O ROLÊ URBANO.',
    price: 99.90,
    image: 'https://i.imgur.com/QKXsWbm.png',
    volume: '1L',
    type: 'Cocktail Alcoólico Gaseificado',
    theme: {
      primary: '#444444',
      secondary: '#0a0a0a',
      glow: 'rgba(100, 100, 100, 0.3)',
      text: '#EEEEEE',
      bg: 'linear-gradient(180deg, #0d0d0d 0%, #000000 100%)',
    }
  },
  {
    id: '3',
    name: 'Combo Pink',
    description: 'VIBE NEON. ATITUDE QUE BRILHA NO ESCURO DO CLUB.',
    price: 94.90,
    image: 'https://i.imgur.com/FaTOEtC.png',
    volume: '1L',
    type: 'Cocktail Alcoólico Gaseificado',
    theme: {
      primary: '#ff00ff',
      secondary: '#200020',
      glow: 'rgba(255, 0, 255, 0.6)',
      text: '#FFFFFF',
      bg: 'linear-gradient(180deg, #150015 0%, #000000 100%)',
    }
  },
  {
    id: '4',
    name: 'Vodka Combo',
    description: 'AZUL E ROSA. O EQUILÍBRIO PERFEITO ENTRE GELO E FOGO.',
    price: 84.90,
    image: 'https://i.imgur.com/U2nL7Mv.png',
    volume: '1L',
    type: 'Cocktail Alcoólico Gaseificado',
    theme: {
      primary: '#00f0ff',
      secondary: '#001a1c',
      glow: 'rgba(0, 240, 255, 0.5)',
      text: '#FFFFFF',
      bg: 'linear-gradient(180deg, #001012 0%, #000000 100%)',
    }
  }
];