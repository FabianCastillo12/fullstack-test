import { useState } from "react";
import { useProducts } from "../app/products/hooks/useProducts";
import ProductSearch from "../app/products/components/ProductSearch";
import ProductList from "../app/products/components/ProductList";
import Pagination from "../app/products/components/Pagination";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5;

  const { products, total, isLoading, error } = useProducts(
    search,
    page,
    limit
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Catálogo de Productos
        </h1>
        <p className="text-gray-500 mt-1">
          {total} producto{total !== 1 ? "s" : ""} encontrado
          {total !== 1 ? "s" : ""}
        </p>
      </div>

      <ProductSearch search={search} setSearch={handleSearch} />

      {isLoading && (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {!isLoading && !error && <ProductList products={products} />}

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
