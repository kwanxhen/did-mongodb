import axios from "axios";
import EthrDID from "ethr-did";

const retrieveDid = (retrieveAddress) => {
  axios
    .get("http://localhost:5000/did/" + retrieveAddress)
    .then((response) => {
      console.log("retrieve successfully");
    })
    .catch((error) => {
      console.log("error in retrieving DID");
    });
};

export default retrieveDid