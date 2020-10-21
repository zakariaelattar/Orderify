import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class SelectInput extends Component {
    handleSubmit() {
        console.log(document.getElementById("select_field").value);
    }
    render() {
        return (
            <div>
            <h6 className="text-muted">Please select the field to add</h6>
                    <select type="select" className="form-control" id="select_field">
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
                    <Link  class="btn btn-primary mt-4 float-left" to=" "> Back</Link>
                    <Link  class="btn btn-success mt-4 float-right" onClick={this.handleSubmit} to="/sideMenu/costumizeInput"> Next</Link>

            </div>
        )
    }
}
