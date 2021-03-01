import React, { useState, useEffect } from "react";
import "./index.css";
import createDid from "../../createDid";

const ButtonCreateDid = () => {
  const [did, setDid] = useState(null);
  const [publicAddress, setPublicAddress] = useState(null);
  const [privateKey, setPrivateKey] = useState(null);

  const identityCreate = () => {
    const ethrDid = createDid();

    const tempDid = ethrDid[0];
    const tempPublicAddress = ethrDid[0].address;
    const tempPrivateKey = ethrDid[1];

    setDid(tempDid.did);
    setPublicAddress(tempPublicAddress);
    setPrivateKey(tempPrivateKey);
  };

  useEffect(() => {}, [did]);

  return (
    <React.Fragment>
      <button onClick={identityCreate}>Create Did</button>
      <div>
        <p>Decentralized Identifier: {did}</p>
      </div>
      <div>
        <p>Public Address: {publicAddress}</p>
      </div>
      <div>
        <p>Private key: {privateKey}</p>
      </div>
    </React.Fragment>
  );
};

export default ButtonCreateDid;
