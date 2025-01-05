import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";

import SecondsCounter from "./component/simpleCounter.jsx";

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
    
    root.render(
        <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
    );
}, 1000);