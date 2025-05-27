import React from 'react';
import { useGridContext } from './GridProvider';

interface PaginationControlsProps {
    onPageChange?: (page: number) => void;
    paginationComponent?: React.ReactNode;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
    onPageChange,
    paginationComponent,
}) => {
    const { state } = useGridContext();

    const { currentPage, totalPages } = state;

    if (paginationComponent) {
        return <>{paginationComponent}</>;
    }

    return (
        <div className="flex justify-center items-center gap-2 mt-6">
            <button
                onClick={() => onPageChange && onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="px-4 py-2 border rounded disabled:opacity-50"
            >
                Previous
            </button>

            <span className="mx-4">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => onPageChange && onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-4 py-2 border rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default PaginationControls;
