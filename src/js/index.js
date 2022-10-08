//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter.jsx"

//render your react application
ReactDOM.render(<SecondsCounter digit1="0" digit2="0" digit3="0" digit4="0" digit5="0" digit6="0"/>, document.querySelector("#app"));
