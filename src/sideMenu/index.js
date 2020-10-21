import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CostumizeInput from './customizeInput';
import SelectInput from './SelectInput';
export default class index extends Component {
    render() {
        return (
            <Router>
            <div className="col-sm-3 offset-sm-1 shadow p-3 mb-5 bg-white rounded">
            <h6>You can add a new field in this section</h6>
            <hr/>
                <Link className="btn btn-primary" to="/sideMenu/SelectInput">
                   Add new field
                </Link>

                <div className="container mt-5">
                <Switch>
                <Route path="/sideMenu/SelectInput" component={SelectInput} />
                <Route path="/sideMenu/CostumizeInput" component={CostumizeInput} />
                </Switch>
                </div>
            </div>
            </Router>
        )
    }
}
