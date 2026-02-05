'use client'

import { useState, useEffect } from 'react'
import { PRODUCTS } from '@/app/data/products'
import type { Product } from '@/app/types'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS)
  const [activeProduct, setActiveProduct] = useState<Product>(PRODUCTS[0])
  const [loading, setLoading] = useState(false)

  const changeActiveProduct = (product: Product) => {
    setActiveProduct(product)
  }

  const getProductById = (id: string) => {
    return products.find(product => product.id === id)
  }

  // Simular carregamento de produtos da API
  const refreshProducts = async () => {
    setLoading(true)
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 1000))
    setProducts(PRODUCTS)
    setLoading(false)
  }

  return {
    products,
    activeProduct,
    loading,
    changeActiveProduct,
    getProductById,
    refreshProducts
  }
}