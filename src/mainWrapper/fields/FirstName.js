import React, { Component, Fragment } from 'react'

export default class FirstName extends Component {
    render() {
        return (
           <Fragment>
               <label htmlFor="first_name">Fist name</label>
               <input type="text" className="form-control"/>
           </Fragment>
        )
    }
}
