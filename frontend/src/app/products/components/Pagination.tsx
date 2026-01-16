type PaginationProps = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  setPage,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        ← Anterior
      </button>

      <span className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-lg">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Siguiente →
      </button>
    </div>
  );
}
