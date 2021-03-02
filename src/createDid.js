import axios from "axios";
import EthrDID from "ethr-did";

const createDid = () => {
  const keypair = EthrDID.createKeyPair();
  const ethrDid = new EthrDID({
    address: keypair.address,
    privateKey: keypair.privateKey,
  });

  //uncomment to post this DID to MongoDB database
  axios
    .post("http://localhost:5000/did/add", {
      alias: "KwanXhen",
      identity: ethrDid.did,
      publicAddress: keypair.address,
      privateKey: keypair.privateKey,
    })
    .then((response) => {
      console.log("did is created and uploaded onto database");
    })
    .catch((error) => {
      console.log(error);
    });

  return [ethrDid, keypair.privateKey]
};

export default createDid;
