'use client';

import React from 'react'
import DynamicTable from '@/Components/DynamicTable'
import withAuth from '@/lib/withAuth'

const students = [
  {
    ID: 1,
    name: "John Smith",
    dateOfBirth: "1990-05-15",
    mobileNumber: "1234567890",
    status: { text: "Accepted", type: 'success' },
    parentName: "Michael Smith"
  },
  {
    ID: 2,
    name: "Jane Doe",
    dateOfBirth: "1992-08-10",
    mobileNumber: "9876543210",
    status: { text: "Pending", type: 'warning' },
    parentName: "Robert Doe"
  },
  {
    ID: 3,
    name: "Alice Johnson",
    dateOfBirth: "1995-02-25",
    mobileNumber: "5555555555",
    status: { text: "Rejected", type: 'danger' },
    parentName: "David Johnson"
  },
  {
    ID: 4,
    name: "Mark Anderson",
    dateOfBirth: "1987-11-20",
    mobileNumber: "9998887776",
    status: { text: "Accepted", type: 'success' },
    parentName: "Laura Anderson"
  },
  {
    ID: 5,
    name: "Emily Wilson",
    dateOfBirth: "1993-04-05",
    mobileNumber: "4443332221",
    status: { text: "Pending", type: 'warning' },
    parentName: "Daniel Wilson"
  },
  {
    ID: 6,
    name: "Michael Brown",
    dateOfBirth: "1998-09-12",
    mobileNumber: "1112223334",
    status: { text: "Rejected", type: 'danger' },
    parentName: "Jessica Brown"
  },
  {
    ID: 7,
    name: "Sophia Lee",
    dateOfBirth: "1991-07-28",
    mobileNumber: "8889990001",
    status: { text: "Accepted", type: 'success' },
    parentName: "William Lee"
  },
  {
    ID: 8,
    name: "Oliver Taylor",
    dateOfBirth: "1994-03-03",
    mobileNumber: "7776665552",
    status: { text: "Pending", type: 'warning' },
    parentName: "Sophie Taylor"
  },
  {
    ID: 9,
    name: "Emma Davis",
    dateOfBirth: "1997-06-18",
    mobileNumber: "6665554443",
    status: { text: "Rejected", type: 'danger' },
    parentName: "Andrew Davis"
  },
  {
    ID: 10,
    name: "Daniel Wilson",
    dateOfBirth: "1989-12-07",
    mobileNumber: "2223334445",
    status: { text: "Accepted", type: 'success' },
    parentName: "Emily Wilson"
  }
];

const studentColumns = [
  { field: 'ID', label: 'ID' },
  { field: 'name', label: 'Name' },
  { field: 'dateOfBirth', label: 'Date of Birth' },
  { field: 'mobileNumber', label: 'Mobile Number' },
  { field: 'status', label: 'Status', type: 'badge' },
  { field: 'parentName', label: 'Parent Name' },
];

const studentFilters = [
  { placeholder: "Name", options: ["John Smith", "Jane Doe"] }, 
  { placeholder: "Status", options: ["Accepted", "Pending"] }, 
  { placeholder: "Name", options: ["John Smith", "Jane Doe"] },

];


const Students = () => {
  return (

    <DynamicTable initialRecords={students} columns={studentColumns} filterOptions={studentFilters} />

  )
}

export default withAuth(Students);