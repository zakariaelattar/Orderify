import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class LastName extends Component {

    constructor(props) {
        super(props);
        this.state= {
            title:"",
            hide_title:0,
            placeholder:"",
            required:0,
            error_message:"",
            related_field:""
        }
    }

    handleTitleChange = (e) => {
        console.log(this.props.addField);

        this.state.title = e.target.value;
    }
    handleHideTitleChange = (e) => {
        this.state.hide_title = e.target.value;
    }
    handlePlaceholderChange = (e) => {
        this.state.placeholder = e.target.value;
    }
    handleRequiredChange = (e) => {
        this.state.required = e.target.value;
    }
    handleErrorMessageChange = (e) => {
        this.state.error_message = e.target.value;
    }
    handleRelatedFieldChange = (e) => {
        this.state.related_field = e.target.value;
    }
    render() {
        return (
            <Router>
            <div className="form-group">
            <label htmlFor="title">Title</label>
            <input onChange={this.handleTitleChange} type="text" className="form-control"/>
                    <div className="form-check">
                    <input type="checkbox" onChange={this.handleHideChange} class="form-check-input" id="hide" />
                    <label class="form-check-label" for="hide">Hide title</label>  
                    </div>
            
            <label htmlFor="placeholder">Placeholder</label>
            <input type="text" onChange={this.handlePlaceholderChange} className="form-control"/>
            
            <div className="form-check">
                    <input type="checkbox" onChange={this.handleRequiredChange} class="form-check-input" id="required" />
                    <label class="form-check-label" for="required">Required</label>  
                    </div>

            <label htmlFor="error_message">Error message</label> 
            <input type="text" onChange={this.handlePlaceholderChange} className="form-control"/>
            <span className="text-muted">Tooltips are disabled in the Form Settings. <a href=""> Enable?</a></span>
            
            <label htmlFor="related_field">Related field</label> 
          <select name="" id="related_field" onChange={this.handleRelatedFieldChange} className="form-control">
          <option value="country">Country</option>
          <option value="title">Tiltle</option>
          </select>
          <Link 
          className="mt-5 btn btn-success" 
          onClick={()=>this.props.addField(this.state)}
          to="/FormEditor">Save Field</Link>

            </div>
            </Router>
        )
    }
}
