import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";

import { Button } from "../Buttons";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "../Select/select";


export function DataTablePagination({ totalPages, currentPage, setCurrentPage, pageSize, setPageSize }) {
    const handleFirstPage = () => setCurrentPage(0);
    const handlePreviousPage = () => setCurrentPage((oldPage) => Math.max(oldPage - 1, 0));
    const handleNextPage = () => setCurrentPage((oldPage) => Math.min(oldPage + 1, totalPages - 1));
    const handleLastPage = () => setCurrentPage(totalPages - 1);

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setCurrentPage(0); // reset page when page size changes
    };

    // Calculate the page numbers to display
    let startPage = Math.max(currentPage - 1, 0);
    let endPage = Math.min(startPage + 3, totalPages);
    if (endPage - startPage < 3) {
        startPage = Math.max(endPage - 3, 0);
    }
    const pageNumbers = Array.from({ length: endPage - startPage }, (_, i) => startPage + i + 1);


    return (
        <div className="flex items-center w-full">
            <div className="flex w-full items-center justify-between space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <Select
                        value={pageSize}
                        onValueChange={(value) => {
                            handlePageSizeChange(value)
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px] ">
                            {pageSize}
                        </SelectTrigger>
                        <SelectContent side="top" className='bg-white'>
                            {[10, 12, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="flex w-[120px] items-center justify-center text-sm font-medium">
                        Showing {currentPage + 1} of {totalPages} page
                    </div>
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={handleFirstPage}
                    >
                        <span className="sr-only">Go to first page</span>
                        <ChevronsLeft className="h-4 w-4" />
                    </Button>


                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={handlePreviousPage}
                    >
                        <span className="sr-only">Go to previous page</span>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {pageNumbers.map((number) => (
                        <div
                            className={`flex justify-center items-center h-8 w-8 p-0 rounded-lg text-sm text-center ${currentPage + 1 === number ? 'font-bold bg-purple-normal text-white' : 'bg-gray-200 '}`}
                            onClick={() => setCurrentPage(number - 1)}
                            key={number}
                        >
                            {number}
                        </div>
                    ))}

                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={handleNextPage}
                    >
                        <span className="sr-only">Go to next page</span>
                        <ChevronRight className="h-4 w-4" />
                    </Button>


                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={handleLastPage}
                    >
                        <span className="sr-only">Go to last page</span>
                        <ChevronsRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
