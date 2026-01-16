type ProductSearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function ProductSearch({
  search,
  setSearch,
}: ProductSearchProps) {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
      />
    </div>
  );
}
