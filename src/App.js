import React, {useState, useCallback} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideMenu from "./sideMenu";
import MainWrapper from "./mainWrapper";
import Connect from './services/Connect';
export default function App() {
 
  new Connect();
  
  console.log();

   const [fields, setFields] = useState([

    {
      title: "First name",
      placeholder: "This is the first item",
      required:1
      
    },
    {
      title: "First name",
      placeholder: "This is the first item",
      required:1

      
    },
    {
      title: "First name",
      placeholder: "This is the first item",
      required:1

      
    }

   ]);
   const [fieldName, setFieldName] = useState("");

    const form_placement = useState("");
    const notice = useState("");
    const form_header = useState("");
    const facebook_pixel_code = useState("");
    const html_thank_you = useState("<p>Thank you</p>");
    const reload_page_close = useState(0);
    const create_draft_order = useState("");
    const allow_single_product_purshase_only = useState(0);
    const show_vendor_in_popup = useState(0);
    const enable_form_error_tooltips = useState(0);
    const show_selected_list_product = useState(0);
    
    var addField = (field_data) => {
      console.log(fields);
      console.log(field_data);
      fields.push(field_data);
    }

  return (

    <div className="container">
        <div className="row mt-5">
            <MainWrapper fields={fields} setFields={setFields} />
              <SideMenu fields={fields} setFields={setFields} addField={addField} />


        </div>
    </div>

  );
}

