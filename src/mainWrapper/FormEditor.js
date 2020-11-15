import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Fields from './fields';

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
    render() {
        return (
            <div className="form-group">
                        <button className="btn btn-primary mt-5 form-control mb-5 disabled">Export to the shop</button>
                        <a className="btn btn-warning" href="mystoreofdev.shopify.com">Visualize</a>
             <p>Here's how your order form will look like</p>
              <hr/>
                <h1 className="text-center"></h1>
                {this.state.fields.map((field,index) =>
                    <Fields key={index} field={field} />
                )}
                <button className="btn btn-success mt-5 float-right">{this.state.formSettings.submit_button_text}</button>
           </div>
        );
    }
}

export default FormEditor;
