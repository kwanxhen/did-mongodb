import { React, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonCreateDid from './components/buttonCreateDid'
import ButtonRetrieveDid from "./components/buttonRetrieveDid";
import ButtonSignMessageDemo from './components/buttonSignMessageDemo';

const App = () => {

  return (
    <div>
      {/* click this button to create a DID and upload to database and display it*/}
      <ButtonCreateDid />
      <ButtonRetrieveDid />
      <ButtonSignMessageDemo />
    </div>

  );
};

export default App;
