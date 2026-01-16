import { useState, useEffect, useMemo } from "react";
import type { Product } from "../types/product";
import { fetchProducts } from "../api/productsApi";

export function useProducts(search: string, page: number, limit: number) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchProducts()
      .then((data) => setAllProducts(data))
      .catch(() => setError("Error al cargar productos"))
      .finally(() => setIsLoading(false));
  }, []);

  const { products, total } = useMemo(() => {
    const filtered = allProducts.filter((p) =>
      p.name?.toLowerCase().includes(search.toLowerCase())
    );

    const start = (page - 1) * limit;
    const paged = filtered.slice(start, start + limit);

    return { products: paged, total: filtered.length };
  }, [allProducts, search, page, limit]);

  return { products, total, isLoading, error };
}
