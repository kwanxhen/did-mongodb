import EthrDID from "ethr-did";
import createDid from "./createDid";
import { verifyJWT } from "did-jwt";
import { Resolver } from "did-resolver";
import { getResolver } from "ethr-did-resolver";
import retrieveDid from './retrieveDid';

const signMessage = async () => {

  const temp = createDid("Alice");
  let ethrDid = temp[0];
  console.log("--- Alice DID:", ethrDid);

  const helloJWT = await ethrDid.signJWT({ hello: "world" });
  console.log(helloJWT);

  //run resolver config here
  const providerConfig = {
    rpcUrl: "https://ropsten.infura.io/v3/a10e367404ae4c3ab0eae42eba9b05bb",
  };
  const ethrDidResolver = getResolver(providerConfig);
  let resolver = new Resolver(ethrDidResolver);
  // const { payload, issuer } = await verifyJWT(helloJWT, { resolver });
  // console.log("payload: ", payload);
  // console.log("issuer: ", issuer);

  const verifiedObj = await verifyJWT(helloJWT, { resolver });
  console.log(verifiedObj);

  // see also https://github.com/decentralized-identity/ethr-did-resolver#multi-network-configuration

  // const providerConfig = {
  //   rpcUrl: "http://localhost:7545",
  //   registry: "0xf47B6D5Bb660AacA3e586287d5891E1Da54c212C",
  // };
  // dont understand what is registry for
  // 0xdca7ef03e98e0dc2b855be647c39abe984fcf21b

  return null;
};

export default signMessage;
