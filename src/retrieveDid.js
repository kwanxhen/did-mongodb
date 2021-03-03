import axios from "axios";
import EthrDID from "ethr-did";

const retrieveDid = (retrieveAddress) => {
  //this axios.get will return retrievedDid data json object
  //to access alias -> response.data.alias
  //to access identity -> response.data.identity
  //.... publicAddress
  //.... privateKey
  
  return axios.get(
    "http://localhost:5000/did/" + retrieveAddress
  ).then(response => response.data)
  
};

export default retrieveDid;
