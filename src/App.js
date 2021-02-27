import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createDid from "./createDid.js";

const App = () => {
  // Uncomment to create DID
  createDid();
  
  return (
    <div className="App">
      <h1>helloworld</h1>
    </div>
  );
};

export default App;
