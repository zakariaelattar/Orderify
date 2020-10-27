import React, { Component } from 'react'

export default class FirstName extends Component {

    constructor(props) {
        super(props);
        this.state= {
            title:"",
            hide_title:0,
            placeholder:"",
            required:0,
            error_message:"",
            related_field:""
        }
    }

    handleTitleChange = (e) => {
        console.log(e.target.value);
        this.state.title = e;
    }
    handleHideTitleChange = (e) => {
        console.log(e.target.value);
        this.state.hide_title = e;
    }
    handlePlaceholderChange = (e) => {
        console.log(e.target.value);
        this.state.placeholder = e;
    }
    handleRequiredChange = (e) => {
        console.log(e.target.value);
        this.state.required = e;
    }
    handleErrorMessageChange = (e) => {
        console.log(e.target.value);
        this.state.error_message = e;
    }
    handleRelatedFieldChange = (e) => {
        console.log(e.target.value);
        this.state.related_field = e;
    }
    render() {
        return (
            <div className="form-group">
            <label htmlFor="title">Title</label>
            <input onChange={this.handleTitleChange} type="text" className="form-control"/>
                    <div className="form-check">
                    <input type="checkbox" onChange={this.handleHideChange} class="form-check-input" id="hide" />
                    <label class="form-check-label" for="hide">Hide title</label>  
                    </div>
            
            <label htmlFor="placeholder">Placeholder</label>
            <input type="text" onChange={this.handlePlaceholderChange} className="form-control"/>
            
            <div className="form-check">
                    <input type="checkbox" onChange={this.handleRequiredChange} class="form-check-input" id="required" />
                    <label class="form-check-label" for="required">Required</label>  
                    </div>

            <label htmlFor="error_message">Error message</label> 
            <input type="text" onChange={this.handlePlaceholderChange} className="form-control"/>
            <span className="text-muted">Tooltips are disabled in the Form Settings. <a href=""> Enable?</a></span>
            
            <label htmlFor="related_field">Related field</label> 
          <select name="" id="related_field" onChange={this.handleRelatedFieldChange} className="form-control">
          <option value="country">Country</option>
          <option value="title">Tiltle</option>

          </select>
        
            </div>
        )
    }
}
