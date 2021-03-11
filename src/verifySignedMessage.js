// import EthrDID from "ethr-did";
// import createDid from "./createDid";
// import { verifyJWT } from "did-jwt";
// import { Resolver } from "did-resolver";
// import { getResolver } from "ethr-did-resolver";
// import retrieveDid from "./retrieveDid";

// const verifySignedMessage = async () => {
//   //use your own ropsten network id
//   const providerConfig = {
//     rpcUrl: "https://ropsten.infura.io/v3/a10e367404ae4c3ab0eae42eba9b05bb",
//   };
//   const ethrDidResolver = getResolver(providerConfig);
//   let resolver = new Resolver(ethrDidResolver);

//   const verifiedObj = await verifyJWT(helloJWT, { resolver });
//   console.log(verifiedObj);

//   return;
// };

// export default verifySignedMessage


//note: this is how you can verifyJWT, providerConfig needs to be set up before verifyJWT works. This is because offline reading of smart contract functions are deployed on ropsten net. 