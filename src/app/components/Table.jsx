"use client";
import { useState, useEffect } from "react";
import { loader } from "./Loader";
import { Pagination } from "./Pagination";

export const Table = ({ columns, data, fetch, isLoading, error, actions }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    
    const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 1;
    const lastItem = currentPage * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;
    const currentItems = data ? data.slice(firstItem, lastItem) : [];
    const handlePageChange = (page) => setCurrentPage(page);

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    return (
        <div className="bg-white border rounded-sm pb-10">
            <table className="min-w-full border-collapse text-sm">
                <thead>
                    <tr className="text-gray-400">
                        {
                            columns.map((col, index) => (
                                <th key={index} className="px-4 py-3 text-left border-b">
                                    {col.title}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-4">
                                    <loader.Circular />
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-4">
                                    <button
                                        className="bg-yellow-600 text-white px-4 py-2 rounded"
                                        type="button"
                                        onClick={fetch}>
                                        Error al traer la información. Intente nuevamente!
                                    </button>
                                </td>
                            </tr>
                        ) : currentItems.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-4">
                                    No hay datos para mostrar
                                </td>
                            </tr>
                        ) : ( currentItems.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                {
                                    columns.map((col, idx) => (
                                        <td key={idx} className="px-4 py-3">
                                            { col.property === "actions" ? actions?.(item) : item[col.property] }
                                        </td>
                                    ))
                                }
                            </tr>
                        )))
                    }
                </tbody>
            </table>
            {
                totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )
            }
        </div>
    );
};
