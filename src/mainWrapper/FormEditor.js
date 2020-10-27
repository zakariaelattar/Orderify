import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Fields from './fields';

class FormEditor extends Component {
    constructor(props) {
        super(props);
        this.state={
            fields: this.props.fields
        }
       
    }

    componentDidMount() {
        console.log(this.props.fields);
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
             <p>Here's how your order form will look like</p>
                {this.state.fields.map((field,index) =>
                    <Fields key={index} field={field} />
                )}
                <button className="btn btn-success mt-5 float-right">buy</button>
           </div>
        );
    }
}

export default FormEditor;
