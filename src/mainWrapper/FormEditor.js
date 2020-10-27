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
    addField() {
        console.log(this.props.field_to_add);
    }
    render() {
        return (
            <div className="form-group">
                {this.state.fields.map((field,index) =>
                    <Fields key={index} field={field} />
                )}
           </div>
        );
    }
}

export default FormEditor;
