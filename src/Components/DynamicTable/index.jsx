"use client"
import React, { useState } from 'react';
import Filtration from './Filtration'
import Table from '../Table'

const DynamicTable = ({ initialRecords, columns, filterOptions: initialFilterOptions }) => {
    const [records, setRecords] = useState(initialRecords);
    const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

    const filterRecords = (value, index) => {
        // Get the key that corresponds to the select filter that changed
        const key = filterOptions[index].placeholder.toLowerCase();
    
        // Filter the initial records based on the selected value
        const filteredRecords = initialRecords.filter(record => {
            if (key === "status") {
                return record.status.text === value;
            } else {
                const keyPath = key.split('.');
                return keyPath.reduce((obj, path) => obj && obj[path], record) === value;
            }
        });
    
        // Update the records that are displayed in the table
        setRecords(filteredRecords);
    };

    const downloadCSV = () => {
        console.log("Download button clicked");
    };

    const addItems = () => {
        console.log("Add items button clicked");
    };

    return (
        <>
            <Filtration
                selectOptions={filterOptions}
                showDownload={true}
                showAddItems={true}
                onSelectChange={filterRecords}
                onDownloadClick={downloadCSV}
                onAddItemClick={addItems}
            />
            <Table records={records} columns={columns} />
        </>
    );
}

export default DynamicTable;