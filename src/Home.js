import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { requestApiData } from "./actions"
import User from './User/User'

class Home extends Component {

    componentDidMount() {
        this.props.requestApiData();
    }

    render() {
        return (
            <User data={this.props.data} />
        );
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);