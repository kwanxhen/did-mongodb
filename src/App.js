import { React, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonCreateDid from './components/buttonCreateDid'

const App = () => {

  return (
    <div>
      {/* click this button to create a DID and upload to database and display it*/}
      <ButtonCreateDid />
    </div>

  );
};

export default App;
