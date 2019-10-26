import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { requestApiData } from "./actions"
import ReactTable from 'react-table'
import "react-table/react-table.css"

class Home extends Component {

    componentDidMount() {
        this.props.requestApiData();
    }

    render() {

        //const data = this.props.data;
       // console.log("results:   ", this.props.data);

        const columns = [
        {
            Header: "First Name",
            accessor: "firstName",
            style:{
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

        return (
            <ReactTable
                columns={columns}
                data = {this.props.data}
                filterable
                defaultPageSize = {1000}
                showPagination = {false}
            >
            </ReactTable>
        );
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);