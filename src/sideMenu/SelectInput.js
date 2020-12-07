import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class SelectInput extends Component {
    constructor(props) {
        super(props);
        this.state ={
            selected_field : "FirstName",
            field_custom_path:"/sideMenu/costumizeInput/FirstName",
            
        }
        console.log(this.props.items);
    }
    handleChange = (e) =>{
        //this.state.selected_field = document.getElementById("select_field").value;
        //this.state.field_custom_path = "/sideMenu/costumizeInput/"+this.state.selected_field;
            console.log("target value:"+e.target.value);
            this.props.parentCallback(e.target.value);
       
    }
    handleSubmit = () =>{
       // this.props.items.push(this.state);
 
    }
    render() {
        return (
            <div>
            <h6 className="text-muted">Please select the field to add</h6>
                    <select type="select" onChange={this.handleChange} className="form-control" id="select_field">
                        <option value="FirstName">First Name</option>
                        <option value="LastName">Last Name</option>
                        <option value="Country">Country</option>
                        <option value="State">State (US)</option>
                        <option value="Heading">Heading</option>
                        <option value="Text">Text</option>
                        <option value="TextArea">Textarea</option>
                        <option value="EmailPhone">Email/Phone number</option>
                        <option value="Dropdown">Dropdown List</option>
                        <option value="Checkbox">Checkbox</option>
                        <option value="Radio">Radio</option>
                    </select>
                    {/* <Link  class="btn btn-primary mt-4 float-left" to=""> Back</Link>
                    <Link  class="btn btn-success mt-4 float-right" onClick={this.handleSubmit} to={this.state.field_custom_path} > Next</Link> */}

            </div>
        )
    }
}
