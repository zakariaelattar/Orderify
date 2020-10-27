import React, { Component, Fragment } from 'react'

export default class Fields extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);

    }

    render() {
        return (
            <Fragment>
            
            <label htmlFor="">{this.props.title}</label>
            <input
             type="text" 
            placeholder={this.props.placeholder}
            className="form-control"

            
             />
            </Fragment>

        )
    }
}
