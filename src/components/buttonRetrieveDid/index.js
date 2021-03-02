import React, { useState, useEffect } from "react";
import "./index.css";
import retrieveDid from "../../retrieveDid";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";

const ButtonRetrieveDid = () => {
  const [retrieveAddress, setRetrieveAddress] = useState('');

  const identityRetrieve = (e) => {
    e.preventDefault();
    //call retrieve function
    const retrievedDid = retrieveDid(retrieveAddress);
    console.log("this is retrievedDid, should be null for now", retrievedDid);
    // const tempDid = retrievedDid[]
  }

  return (
    <React.Fragment>
      <Container style={{marginTop: "80px" }}>
        <form onSubmit={identityRetrieve}>
          <Input 
            value={retrieveAddress}
            onChange={(e)=>{
              setRetrieveAddress(e.target.value);
              console.log(e.target.value);
            }}
            placeholder='Public Address'
            type='text'
            name='retrieveAddress'
            required
          />
          <Button type='submit' variant='contained' color='secondary'>
            Retrieve Did
          </Button>
        </form>
      </Container>
    </React.Fragment>
  )
}

export default ButtonRetrieveDid;