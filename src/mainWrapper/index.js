import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import FormEditor from "./FormEditor";
  import FormSettings from "./FormSettings";
  import ExportOrders from './ExportOrders';

export default class index extends Component {

  constructor(props) {
    super(props);
  }
    render() {
        return (
            <Router>
            <div className="col-sm-7 shadow  p-3 mb-5 bg-white rounded">
          {/* Navigation menu */}
            <ul class="nav nav-tabs">
              <li className="nav-item">
              <Link className="nav-link" to="/FormEditor">Form Editor</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/FormSettings">Form Settings</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/ExportOrders">Export Orders</Link>
              </li>
            </ul>
          {/* end Navigation menu */}


          {/* adding fields in this section */}
    <Switch>
      <Route path="/ExportOrders" component={() => <ExportOrders  />}  />
      <Route path="/FormEditor" component={() => <FormEditor fields={this.props.fields} />}  />
      <Route path="/FormSettings" component={() => <FormSettings  />}  />
    </Switch>

{/* End add field section */}
            </div>
            </Router>
        )
    }
}
