import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class FormEditor extends Component {
    render() {
        return (
            <div className="form-group">
            <label htmlFor="first_name">First name *</label>
            <input type="text" className="form-control"/>
        </div>
        );
    }
}

export default FormEditor;
