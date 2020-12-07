import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import FirstName from "./FirstName";
  import LastName from "./LastName";
  import Country from "./Country";
  import Checkbox from "./Checkbox";
  import Dropdown from "./Dropdown";
  import EmailPhone from "./EmailPhone";
  import State from "./State";
  import Radio from "./Radio";
  import Text from "./Text";
  import TextArea from "./TextArea";
  import Heading from "./Heading";
export default class CostumizeInput extends Component {
    constructor(props) {
        super(props);
 
    }
    render() {
        return (
            <Router>
            <div>
            <Switch>
                    <Route path="/sideMenu/costumizeInput/Heading" component={() => <Heading addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/LastName" component={() => <LastName addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/FirstName" component={() => <FirstName addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/Country" component={() => <Country addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/Checkbox" component={() => <Checkbox addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/Dropdown" component={() => <Dropdown addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/EmailPhone" component={() => <EmailPhone addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/State" component={() => <State addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/Radio" component={() => <Radio addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/Text" component={() => <Text addField={this.props.addField} />} />
                    <Route path="/sideMenu/costumizeInput/TextArea" component={() => <TextArea addField={this.props.addField} />} />
            </Switch>

                {/* <Link  class="btn btn-primary mt-4 float-right" to=" ">Back</Link>
                <Link className="btn btn-success mt-4 float-left" to="/sideMenu/SelectInput">Save field</Link> */}

            </div>

            </Router>
        )
    }
}
