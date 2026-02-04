'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Eye } from 'lucide-react';
import Link from 'next/link';

interface Column<T> {
    key: keyof T | string;
    label: string;
    render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    itemsPerPage?: number;
    searchPlaceholder?: string;
    searchKeys?: (keyof T)[];
    linkPrefix?: string;
    idKey?: keyof T;
}

export default function DataTable<T extends object>({
    data,
    columns,
    itemsPerPage = 10,
    searchPlaceholder = 'Buscar...',
    searchKeys = [],
    linkPrefix,
    idKey = 'id' as keyof T,
}: DataTableProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter((item) => {
        if (!searchTerm || searchKeys.length === 0) return true;
        return searchKeys.some((key) => {
            const value = item[key];
            if (typeof value === 'string') {
                return value.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
        });
    });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const getValue = (item: T, key: string): unknown => {
        if (key.includes('.')) {
            const keys = key.split('.');
            let value: unknown = item;
            for (const k of keys) {
                value = (value as Record<string, unknown>)?.[k];
            }
            return value;
        }
        return (item as Record<string, unknown>)[key];
    };

    return (
        <div className="data-table-container">
            <div className="table-header">
                <div className="search-box">
                    <Search size={16} className="search-icon" />
                    <input
                        type="text"
                        placeholder={searchPlaceholder}
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="search-input"
                    />
                </div>
                <span className="table-count">
                    {filteredData.length} registros
                </span>
            </div>

            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th key={String(col.key)}>{col.label}</th>
                            ))}
                            {linkPrefix && <th>Acciones</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((item, index) => (
                            <tr key={index}>
                                {columns.map((col) => (
                                    <td key={String(col.key)}>
                                        {col.render ? col.render(item) : String(getValue(item, String(col.key)) ?? '-')}
                                    </td>
                                ))}
                                {linkPrefix && (
                                    <td>
                                        <Link
                                            href={`${linkPrefix}/${item[idKey]}`}
                                            className="action-btn"
                                        >
                                            <Eye size={16} />
                                            Ver
                                        </Link>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="table-pagination">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="pagination-btn"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <span className="pagination-info">
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="pagination-btn"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            )}
        </div>
    );
}
