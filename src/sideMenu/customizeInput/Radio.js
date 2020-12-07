import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Radio extends Component {

    constructor(props) {
        super(props);
        this.state= {
            title:"",
            required:false,
            errorMessage:"error",
            type:"radio"

        }
    }

    handleTitleChange = (e) => {
        console.log(this.props.addField);

        this.state.title = e.target.value;
    }
    handleRequiredChange = (e) => {
        this.state.required = e.target.value;
    }
    handleErrorMessageChange = (e) => {
        this.state.error_message = e.target.value;
    }
    render() {
        return (
            <Router>
            <div className="form-group">
            <label htmlFor="title">Title</label>
            <input onChange={this.handleTitleChange} type="text" className="form-control"/>
                  
            <div className="form-check">
                    <input type="checkbox" onChange={this.handleRequiredChange} class="form-check-input" id="required" />
                    <label class="form-check-label" for="required">Required</label>  
                    </div>

            <label htmlFor="error_message">Error message</label> 
            <input type="text" onChange={this.handlePlaceholderChange} className="form-control"/>
            <span className="text-muted">Tooltips are disabled in the Form Settings. <a href=""> Enable?</a></span>

          <Link 
          className="mt-5 btn btn-success" 
          onClick={()=>this.props.addField(this.state)}
          to="/FormEditor">Save Field</Link>

            </div>
            </Router>
        )
    }
}
