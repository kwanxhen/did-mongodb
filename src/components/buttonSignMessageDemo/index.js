import React, {useState, useEffect} from 'react';
import signMessage from '../../signMessage';

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";

const ButtonSignMessageDemo = () => {

  const signMessageDemo = async (e) => {
    e.preventDefault();
    const helloJWT = await signMessage();
    
  }

  return (
    <React.Fragment>
      <Container style={{marginTop: "80px "}}>
        <form onSubmit={signMessageDemo}>
          <Button type='submit' variant='contained' color='secondary'>
            Sign Message Demo
          </Button>
        </form>
      </Container>
    </React.Fragment>
  )
}

export default ButtonSignMessageDemo