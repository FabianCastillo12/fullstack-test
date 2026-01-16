import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { fetchProducts } from "../api/productsApi";

export function useProducts(search: string, page: number, limit: number) {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchProducts({ page, limit, search })
      .then((response) => {
        setProducts(response.products);
        setTotal(response.total);
      })
      .catch(() => setError("No se pudieron cargar los productos"))
      .finally(() => setIsLoading(false));
  }, [search, page, limit]);

  return { products, total, isLoading, error };
}
