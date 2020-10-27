import React, {useState, useCallback} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideMenu from "./sideMenu";
import MainWrapper from "./mainWrapper";

export default function App() {
 
   const [fields, setFields] = useState([

    {
      title: "First name",
      placeholder: "This is the first item",
      
    },
    {
      title: "First name",
      placeholder: "This is the first item",
      
    },
    {
      title: "First name",
      placeholder: "This is the first item",
      
    }

   ]);
   const [fieldName, setFieldName] = useState("");

    var bindComponent = (field_data) => {
      fields.push(field_data);
    }

  return (

    <div className="container">
        <div className="row mt-5">
            <MainWrapper fields={fields} setFields={setFields} />
              <SideMenu fields={fields} setFields={setFields} bindComponent={bindComponent} />


        </div>
    </div>

  );
}

