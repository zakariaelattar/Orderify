import React, { Component, Fragment } from 'react'

export default class Fields extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: this.props.field.title,
            placeholder: this.props.field.placeholder,
            required:this.props.field.required,
            type:this.props.field.type
        }
        console.log(this.props);
    }

    render() {
        if(this.state.type == "text" ||this.state.type == "checkbox" ||this.state.type == "radio" ) {
            return (
                <Fragment>
                
                <label htmlFor="">{this.state.title}:</label>
                <input
                 type={this.state.type} 
                placeholder={this.state.placeholder}
                required
                className="form-control"
                
                 />
                </Fragment>
    
            )
        }
        if(this.state.type == "textarea" ) {
            return (
                <Fragment>
                
                <label htmlFor="">{this.state.title}:</label>
                <textarea

                placeholder={this.state.placeholder}
                required
                className="form-control"
                
                 ></textarea>
                </Fragment>
    
            )
        }
        if(this.state.type == "select" ) {
            return (
                <Fragment>
                
                <label htmlFor="">{this.state.title}:</label>
                <select
                required
                className="form-control"
                
                 >

                     <option>Angolla</option>
                 </select>
                </Fragment>
    
            )
        }
        else {
            return (
                <Fragment>
                
                <label htmlFor="">{this.state.title}:</label>
                <input
                 type={this.state.type} 
                placeholder={this.state.placeholder}
                required
                className="form-control"
                
                 />
                </Fragment>
    
            )
        }
        

    }
}