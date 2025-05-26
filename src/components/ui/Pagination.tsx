import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];
  
  // Always show first page, last page, current page, and one page before and after current
  const pagesToShow = new Set([
    1,
    totalPages,
    currentPage,
    currentPage - 1,
    currentPage + 1,
  ]);
  
  // Remove invalid pages (less than 1 or greater than totalPages)
  const validPagesToShow = Array.from(pagesToShow).filter(
    (page) => page >= 1 && page <= totalPages
  ).sort((a, b) => a - b);
  
  // Add ellipses where needed
  let lastAddedPage = 0;
  for (const page of validPagesToShow) {
    if (lastAddedPage && page - lastAddedPage > 1) {
      pageNumbers.push('...');
    }
    pageNumbers.push(page);
    lastAddedPage = page;
  }

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center text-sm text-gray-700">
        <span>Page</span>
        <select
          className="mx-2 border border-gray-300 rounded px-2 py-1"
          value={currentPage}
          onChange={(e) => onPageChange(Number(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <span>of {totalPages}</span>
      </div>
      
      <div className="flex">
        <button
          className="mr-1 px-3 py-1 border border-gray-300 rounded text-gray-700 disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            className={`px-3 py-1 mx-1 rounded ${
              page === currentPage
                ? 'bg-teal-500 text-white'
                : page === '...'
                ? 'border-none cursor-default'
                : 'border border-gray-300 text-gray-700'
            }`}
            onClick={() => page !== '...' && onPageChange(page as number)}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        
        <button
          className="ml-1 px-3 py-1 border border-gray-300 rounded text-gray-700 disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;