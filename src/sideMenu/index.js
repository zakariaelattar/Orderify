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
constructor(props) {
    super(props);
    this.state = {
        selectedInput:""
    };
    
}
callbackFunction = (childData) => {
    this.setState({selectedInput: childData})
}


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
                <Route path="/sideMenu/SelectInput" component={() => <SelectInput parentCallback = {this.callbackFunction} items={this.props.fields} />} />
                <Route path="/sideMenu/CostumizeInput" component={
                    () => <CostumizeInput 
                items={this.props.fields} 
                addField={this.props.addField} />
                } />
                </Switch>
                </div>
                <Link className="btn btn-primary" to={"/sideMenu/CostumizeInput/"+this.state.selectedInput}>
                   next
                </Link>
            </div>
            </Router>
        )
    }
}
