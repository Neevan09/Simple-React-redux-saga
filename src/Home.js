import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { requestApiData } from "./actions"

class Home extends Component {

    componentDidMount() {
        this.props.requestApiData();
    }

    person = (user) => (
        <div>
            <h1>API DATA</h1>
            <ul>
                <li key={user.id}>
                    <h1>Fetched API DATA</h1>
                    <h1>First Name: {user.username}</h1> 
                </li>
            </ul>
        </div>
    );

    render() {        

        const { data = [] } = this.props;
    console.log("results:   "+this.props.data);
       // debugger; 
        //debugger;
        return (
            <div>
                <h1>Rendering....</h1>
                    { 
                        data.map(this.person)
                    }
            </div>
        );
    }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);