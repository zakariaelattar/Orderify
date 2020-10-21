import React, {useState, useCallback} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideMenu from "./sideMenu";
import MainWrapper from "./mainWrapper";

export default function App() {
 

  return (

    <div className="container">
        <div className="row mt-5">
            <MainWrapper />
              <SideMenu />


        </div>
    </div>

  );
}

