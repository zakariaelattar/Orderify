import React, {useState, useCallback} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideMenu from "./sideMenu";
import MainWrapper from "./mainWrapper";
import axios from 'axios';
import queryString from 'query-string';

import {reactLocalStorage} from 'reactjs-localstorage';

var url = window.location.href;
var accessToken =url.substring(35);
export default function App() {

  // new Connect();
  const RequestHeaders = {
    'X-Shopify-Access-Token': accessToken
  };

  if(RequestHeaders["X-Shopify-Access-Token"] != "")
  reactLocalStorage.setObject('RequestHeaders', RequestHeaders);
 
  const obj = {};
  //axios.get("api/orders", { headers: RequestHeaders });
 //axios.get("api/processProductPage", { headers: RequestHeaders });
  //axios.post("api/orders",obj,{ headers: RequestHeaders });
  
   const [fields, setFields] = useState([

    {
      title: "First name",
      placeholder: "This is the first item",
      required:1
      
    }

   ]);
 
   const [formSettings, setFormSettings] = useState(
    {
      "form_placement":"enable_on_product_page_only",
      "form_header":"My form header",
      "notice":"notice text",
      "reload_page_while_closing_order_popup":"false",
      "create_draft_order":"false",
      "allow_single_product_pushase_only":"false",
      "show_selected_list_of_products_in_the_popup":"false",
      "show_vendor_in_the_popup":"true",
      "enable_form_error_tooltips":"false",
      "submit_button_text":"submit your inquery",
      "submit_button_color":"#ff1122ff",
      "facebook_pixel_code":"----------",
      "custom_html_for_thank_you_popup":"thank you!"
  }
   );
    var addField = (field_data) => {
      console.log(fields);
      console.log(field_data);
      fields.push(field_data);
    }

  return (

    <div className="container">
        <div className="row mt-5">
            <MainWrapper requestHeaders={RequestHeaders} fields={fields} formSettings={formSettings} setFields={setFields} />
              <SideMenu fields={fields} setFields={setFields} formSettings={formSettings} addField={addField} />


        </div>
    </div>

  );
}

