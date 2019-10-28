import React from 'react'
import ReactTable from 'react-table'
import "react-table/react-table.css"


let columns = [
    {
        Header: "First Name",
        accessor: "firstName",
        style: {
            textAlign: "left"
        },
        width: 150,
        minWidth: 100,
        maxWidth: 200
    },
    {
        Header: "Last Name",
        accessor: "lastName",
        width: 150,
        minWidth: 100,
        maxWidth: 200
    },
    {
        Header: "Company",
        accessor: "company.name"
    },
    {
        Header: "City",
        accessor: "address.city"
    },
    {
        Header: "Email",
        accessor: "email",
        sortable: false,
        filterable: false
    }]
const user = (props) => {
    return <ReactTable
        columns={columns}
        data={props.data}
        filterable
        defaultPageSize={15}
        showPagination={false}
    >
    </ReactTable>
}

export default user;