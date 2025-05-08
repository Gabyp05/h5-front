import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center space-x-2 mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 cursor-pointer disabled:opacity-50">
                <ChevronLeft size={16} />
            </button>
            {
                pages.map(page => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 border rounded ${page === currentPage ? 
                        "bg-blue-500 text-white" : ""}`}>
                        {page}
                    </button>
                ))
            }
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 cursor-pointer disabled:opacity-50">
                <ChevronRight size={16} />
            </button>
        </div>
    );
};
