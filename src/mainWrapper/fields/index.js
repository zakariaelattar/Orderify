import React, { Component, Fragment } from 'react'

export default class Fields extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: this.props.field.title,
            placeholder: this.props.field.placeholder
        }
        console.log(this.props);
    }

    render() {
        return (
            <Fragment>
            
            <label htmlFor="">{this.state.title}:</label>
            <input
             type="text" 
            placeholder={this.state.placeholder}
            className="form-control"

            
             />
            </Fragment>

        )
    }
}
