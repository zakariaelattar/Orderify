import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fs from 'fs';
import Fields from './fields';
import axios from 'axios';

class FormEditor extends Component {
    constructor(props) {
        super(props);
        this.state={
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

    }
    addField() {
        console.log(this.props.field_to_add);
    }
    saveForm() {
       console.log("saving ..."); 
       axios.post('api/addModal',document.getElementById("form").innerHTML);


    }
    render() {
        return (
            <div className="form-group">
                        <button className="btn btn-primary mt-5 form-control mb-5 disabled" onClick={this.saveForm}>Export to the shop</button>
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
