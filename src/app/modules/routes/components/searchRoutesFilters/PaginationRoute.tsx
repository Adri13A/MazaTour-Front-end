'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationRouteProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (itemsPerPage: number) => void;
}

const PaginationRoute: React.FC<PaginationRouteProps> = ({
    totalPages,
    currentPage,
    onPageChange,
    onItemsPerPageChange,
}) => {
    const maxPageButtons = 5;
    let pageNumbers = [];

    if (totalPages <= maxPageButtons) {
        pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
        if (currentPage <= 3) {
            pageNumbers = [1, 2, 3, '...'];
        } else if (currentPage >= totalPages - 2) {
            pageNumbers = [totalPages - 3, '...', totalPages - 2, totalPages - 1, totalPages];
        } else {
            pageNumbers = [currentPage - 1, currentPage, currentPage + 1, '...'];
        }
    }

    return (
        <div className="font-gantari mt-6 flex rounded-xl bg-gray-100 px-2 py-1 md:px-2 md:py-1 justify-between items-center text-sm">
            {/* Items per page selection */}
            <div className="flex gap-2">
                <button
                    className="w-8 h-8 rounded-lg text-gray-700 bg-white hover:bg-gray-400 hover:text-white hover:border-gray-400 border-gray-300"
                    onClick={() => onItemsPerPageChange(10)}
                >
                    10
                </button>
                <button
                    className="w-8 h-8 rounded-lg text-gray-700 bg-white hover:bg-gray-400 hover:text-white hover:border-gray-400 border-gray-300"
                    onClick={() => onItemsPerPageChange(50)}
                >
                    50
                </button>
                <button
                    className="w-8 h-8 rounded-lg text-gray-700 bg-white hover:bg-gray-400 hover:text-white hover:border-gray-400 border-gray-300"
                    onClick={() => onItemsPerPageChange(100)}
                >
                    100
                </button>
            </div>

            {/* Pagination controls */}
            <div className="flex items-center gap-2">
                {/* Previous Page */}
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="w-8 h-8 flex items-center justify-center text-gray-700  bg-white rounded-lg"
                    aria-label="Previous Page"
                >
                    <ChevronLeft size={16} />
                </button>

                {/* Page Numbers */}
                {pageNumbers.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === 'number' && onPageChange(page)}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-gray-700 border-gray-300 ${currentPage === page ? 'bg-green-700 text-white border-green-700' : ''}`}
                        aria-label={`Go to page ${page}`}
                        disabled={page === '...'}
                    >
                        {page === '...' ? '...' : page}
                    </button>
                ))}

                {/* Next Page */}
                <button
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="w-8 h-8 flex items-center justify-center text-gray-700 bg-white rounded-lg"
                    aria-label="Next Page"
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default PaginationRoute;
