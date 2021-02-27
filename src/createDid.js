import axios from "axios";
import EthrDID from "ethr-did";

const createDid = () => {
  const keypair = EthrDID.createKeyPair();
  console.log(keypair);
  const ethrDid = new EthrDID({
    address: keypair.address,
    privateKey: keypair.privateKey,
  });

  axios
    .post("http://localhost:5000/did/add", {
      alias: "KwanXhen",
      identity: ethrDid.did,
      publicAddress: keypair.address,
      privateKey: keypair.privateKey,
    })
    .then((response) => {
      console.log("did is created and uploaded onto mongodb database");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default createDid;
