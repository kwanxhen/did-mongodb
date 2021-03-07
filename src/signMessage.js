import EthrDID from 'ethr-did';
import createDid from './createDid';

//later implementation can include a message variable to be passed into this signmessage function
const signMessage = async () => {
  const temp = createDid('Tiffany'); //note that at this point, a did is created and the relevant details are already uploaded to mongodb
  let ethrDid = temp[0]; //getback a ethrDid from the createDid function
  console.log(ethrDid)
  //note that we can do a retrieveDid here also
  //we use createdid to demo only

  //message payload hello: 'world'
  const helloJWT = await ethrDid.signJWT({hello: 'world'});

  console.log('this is hellowjwt', helloJWT);
  
  // const {payload, issuer} = ethrDid.verifyJWT('eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE1MzE4Mjk5NzUsImF1ZCI6ImRpZDpldGhyOltvYmplY3QgT2JqZWN0XSIsImV4cCI6MTk1NzQ2MzQyMSwibmFtZSI6InVQb3J0IERldmVsb3BlciIsImlzcyI6ImRpZDpldGhyOltvYmplY3QgT2JqZWN0XSJ9.Mralpbz1Lo7DRsrWX7EYvtKDr8NAJWnf0Mgt4y8Eyu-WDNEHmZFwsTw_vG09zYGCM38RHEPeRTftRIYL__WMPg')
  console.log('---- payload is ', payload);
  console.log('---- issuer is ', issuer);

  return helloJWT;
}

export default signMessage 

  //with this ethrDid we can run our demo of signing and verifyin a JWT