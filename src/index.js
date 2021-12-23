import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function ele(){
    const element =(
        <div>
        <App/>
        </div>
        );
    ReactDOM.render(element,document.getElementById('root'));
}
