import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fs from 'fs';
import Fields from "./fields"
import axios from 'axios';
import queryString from 'query-string';
import {reactLocalStorage} from 'reactjs-localstorage';
const RequestHeaders = reactLocalStorage.getObject('RequestHeaders');

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
        console.log("updated");

    }
    addField() {
        console.log(this.props.field_to_add);
    }
    saveForm() {
        console.log("saving ..."); 
        let page = document.getElementById("form").innerHTML;
        axios({
            method:'post',
            url:'api/saveModal',
            data:{formHTML:page},
            headers: RequestHeaders
        });
    }
    exportForm() {
        console.log("exporting ..."); 

       let page = document.getElementById("form").innerHTML;
       console.log(page);
       axios({
           method:'post',
           url:'api/exportModal',
           data:{formHTML:page},
           headers: RequestHeaders
       });
    //    axios.post("api/exportModal",
    //     RequestHeaders,
    //     {formHTML:page}
    //     );


    }
    render() {
        return (
            <div className="form-group">
            <p>You may add, edit, drag'n'drop and remove fields on this page</p>
                        <button className="btn btn-primary mt-5 form-control mb-5 disabled" onClick={this.exportForm}>Export to the shop</button>
                        <a className="btn btn-warning" href="mystoreofdev.shopify.com">Visualize on the shop (requiring exporting the form to the shop)</a>
                        <button className="btn btn-secondary float-right" onClick={this.saveForm}>Save</button>
             <p className="mt-5">Here's how your order form will look like</p>
              <hr/>
              <div id="form">
              <h1 className="text-center">{this.state.formSettings.form_header}</h1>
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
