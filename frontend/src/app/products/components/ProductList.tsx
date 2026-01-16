import type { Product } from "../types/product";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No se encontraron productos</p>
      </div>
    );
  }

  return (
    <div className="grid gap-2">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
        >
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.description}</p>
            </div>
            <div className="text-right ml-4">
              <p className="font-bold text-blue-600">S/.{p.price}</p>
              <p className="text-xs text-gray-400">
                Stock:{" "}
                <span
                  className={
                    p.stock > 10 ? "text-green-500" : "text-orange-500"
                  }
                >
                  {p.stock}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
