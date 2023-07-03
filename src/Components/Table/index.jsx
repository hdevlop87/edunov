"use client"
import React, { useState } from 'react';
import { Badge } from '../Badge';
import {
    Table,
    TableBody,
    TableHeader,
    TableCell,
    TableHead,
    TableRow,
} from "./table";
import { Icon } from '@iconify/react';
import { DataTablePagination } from './Pagination';


const renderContent = (type, content) => {
    switch (type) {
        case 'text':
            return content;
        case 'image':
            return <img src={content} alt="" width="50" height="50" />;
        case 'badge':
            return <Badge variant={content.type}>{content.text}</Badge>; // Now handles an object
        case 'checkbox':
            return <Checkbox checked={content} />;
        default:
            return content;
    }
};

const AdmissionTable = ({ records, columns }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const displayedRecords = records.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
    const totalPages = Math.ceil(records.length / pageSize);

    return (
        <div className='flex flex-col w-full gap-4'>
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((col, index) => (
                            <TableHead key={index}>{col.label}</TableHead>
                        ))}
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {displayedRecords.map((record, index) => (
                        <TableRow key={record.ID}>
                            {columns.map((col) => (
                                <TableCell key={col.field} className={`${index % 2 === 0 ? 'bg-purple-50' : ''}`}>
                                    {renderContent(col.type, record[col.field])}
                                </TableCell>
                            ))}
                            <TableCell className={`flex h-12 ${index % 2 === 0 ? 'bg-purple-50' : ''}`}>
                                <Icon icon='lucide:edit' width={24} className="mr-2 text-blue-500" />
                                <Icon icon='tabler:trash' width={24} className="mr-2 text-red-500" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <DataTablePagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} pageSize={pageSize} setPageSize={setPageSize} />
        </div>
    );
}

export default AdmissionTable;
