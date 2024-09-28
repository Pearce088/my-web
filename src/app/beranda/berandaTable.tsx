import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Title',
    selector: (row: { title: any; }) => row.title,
    sortable: true,
  },
  {
    name: 'Year',
    selector: (row: { year: any; }) => row.year,
    sortable: true,
  },
  {
    name: 'Year',
    selector: (row: { year: any; }) => row.year,
    sortable: true,
  },
  {
    name: 'Year',
    selector: (row: { year: any; }) => row.year,
    sortable: true,
  },
];

const data = [
  { id: 1, title: 'Conan the Barbarian', year: '1982' },
  { id: 2, title: 'Die Hard', year: '1988' },
  { id: 3, title: 'Terminator', year: '1984' },
  { id: 4, title: 'Predator', year: '1987' },
  { id: 5, title: 'Rambo', year: '1982' },
];

const Hometable = () => {
  return (
    <div className="datatable-container">
      <DataTable
        title="Jayantara Roleplay Table"
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Hometable;
