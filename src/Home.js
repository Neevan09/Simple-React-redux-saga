import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { requestHelloWorld } from "./actions"

class Home extends Component {

    componentDidMount() {
        this.props.requestHelloWorld();
    }

    render() {
        return (
            <h1>
                {this.props.helloworld}
            </h1
            >);
    }
}


const mapStateToProps = state => ({ helloworld: state.helloWorld });

const mapDispatchToProps = dispatch => bindActionCreators({ requestHelloWorld }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);