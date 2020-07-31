// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App.js";
// ReactDOM.render(<h1>coucou</h1>, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/jss/App.css"
// import "./assets/font/Papyrus-Condensed.woff"
import App from "./components/App.js";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Gotu','sans-serif']
  }
});

ReactDOM.render(    
    <App />,
    document.getElementById('root')
);