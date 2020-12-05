import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fs from 'fs';
import Fields from './fields';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import queryString from 'query-string';
const RequestHeaders = reactLocalStorage.getObject('RequestHeaders');


class FormEditor extends Component {
    constructor(props) {
        super(props);
        this.state={
            requestHeaders: this.props.requestHeaders,
            fields: this.props.fields,
            formSettings: this.props.formSettings
        }
       
    }

    componentDidMount() {
        console.log(this.props.fields);
        console.log(this.state.formSettings);
    }
    componentDidUpdate() {
        this.state.fields = this.props.fields;
        console.log(this.props.fields);
        console.log("updated");

    }
    addField() {
        console.log(this.props.field_to_add);
    }
    exportForm() {
       console.log("saving ..."); 
       let page = document.getElementById("form").innerHTML;
       console.log(page);
       axios.post("api/exportModal", {formHTML:page},RequestHeaders);


    }
    render() {
        return (
            <div className="form-group">
            <p>You may add, edit, drag'n'drop and remove fields on this page</p>
                        <button className="btn btn-primary mt-5 form-control mb-5 disabled" onClick={this.exportForm}>Export to the shop</button>
                        <a className="btn btn-warning" href="mystoreofdev.shopify.com">Visualize</a>
             <p>Here's how your order form will look like</p>
              <hr/>
              <div id="form">
              <h1 className="text-center"></h1>
                {this.state.fields.map((field,index) =>
                    <Fields key={index} field={field} />
                )}
                <button className="btn btn-success mt-5 float-right">{this.state.formSettings.submit_button_text}</button>
              </div>

           </div>
        );
    }
}

export default FormEditor;
