import { React, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonCreateDid from './components/buttonCreateDid'
import ButtonRetrieveDid from "./components/buttonRetrieveDid";
import ButtonResolveDid from "./components/buttonResolveDid";

const App = () => {

  return (
    <div>
      {/* click this button to create a DID and upload to database and display it*/}
      <ButtonCreateDid />
      <ButtonRetrieveDid />
      <ButtonResolveDid />
    </div>

  );
};

export default App;
