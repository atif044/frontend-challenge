import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
  handleNextPage,
  handlePreviousPage,
}) => {
  return (
    <div className="flex w-full justify-center gap-4 p-10">
      <button
        onClick={handlePreviousPage}
        className="text-white disabled:text-[#767676] rounded-md p-2"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {totalPages === 0 ? (
        <p className="text-white self-center">No page</p>
      ) : (
        Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`rounded-md transition-all duration-300 ${
              currentPage === index + 1
                ? "text-white font-bold"
                : "text-[#767676] hover:text-white"
            }`}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))
      )}

      <button
        onClick={handleNextPage}
        className="text-white disabled:text-[#767676] rounded-md p-2"
        disabled={currentPage === totalPages || totalPages < 1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
