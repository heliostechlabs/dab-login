
const axios = require('axios');
const fs = require('fs');
const https = require('https');

const pemFilePath = 'dialabank.pem'; // Path to your combined PEM file

// Read the combined PEM file
const pemData = fs.readFileSync(pemFilePath);

const agent = new https.Agent({
  key: pemData,
  cert: pemData
});

const requestBody = {
  "body": {
    "loginRequest": {
      "encryptedRequest": "eyJhbGciOiJSUzI1NiJ9.ZXlKbGJtTWlPaUpCTWpVMlIwTk5JaXdpWVd4bklqb2lVbE5CTFU5QlJWQXRNalUySW4wLkJpLTN1ZnVkQW9ueGVjV1h6Y3FnTEpnMFZJQ2h2V1NnbjBXNHljRG41OTI5eVRsWWFJZU9UMHNNRF9qeXpUbXRHZl9BM0xjRzhYLURtcVBXNkZhYnlpUk9aOERhQkV5cm0yNHd1MHVBdDRsWDBfSGo2aE1PODc5d2t0RVdlS2RXZEJOVjI1N3pzVVQ3MTZTQ09SdTRqbDVsT0M3VmFOZURPQnFUU3NnY19yTEZiR0hvaGs2dnNqUDhWSGYzSFd5bnpiMTA2UUl0WHJ2dXJkVmtLY0hsV1FRQmxCSURETWZPVUM4MWVYMUI5ZGJHdE9YeFl0VTMzbWpUTDdhWnY1N2RmeVRacXF5Nml4c3p6N1ZFRHdzNHRIUGkzQVVNSzNJX2NyR0xfVFFGdFRNd0Z6V0xlRzE1enJEQjN2UGJVNmMtd1RaZjdkaTFwRU5DelQzNVhMN09uZy55ZndKU3N3VzQ4c0F5OE1ELkZ2X2xTeEU3UVkyQVpNNjk2OUtfMWd0WTBBZ0tjUmd4bFcyT0dqcmYwd2VpTVcwenp5bnFZTkM0MEZtT2dOSzhxT09PeVB1RmdsWlJZSjhQeXBNLkVRMklqa2NFdDNOZFhLbDZoX2ZBSXc.tOjzMRTezdcmUJ8DI_M4IIIkLhZ-oYRkHuROqIxO4hynorn2O7_Lo5yDq0Dckw5bQWdQbDFdb6cpQMVCCgfcCL-YbsO0smPeFSY77kc28HCd7e-gDUFS1kMSGyta7flBPlrxYmFqbqFEPPe6fNHc61Y3utX_CEdrMq5MQNbILsi9nIqU4DClUiw6jqJ-lqZNBP80h23EUsaljylUy5uIcKrwFeMaeDJAOFw4-OJPopqAL6WcqpD-b6kGpYlTn73igm1ceVV8d_qTAN8XkwYeOP7n2XVogqqQBAcunFSQ2utFDNkaIWFqdoAbBfgw3zMMexnF5YaqDIx3EmqD8xsSZQ"
    }
  }
};

const headers = {
  'x-fapi-channel-id': 'DAILABANK',
  'x-fapi-epoch-millis': '98129812',
  'x-fapi-uuid': '431222',
  'x-fapi-serviceId': 'openapi',
  'x-fapi-serviceVersion': '1.0',
  'Content-Type': 'application/json',
  'X-IBM-Client-Id': 'cd7702c6c60795c68f2bd594a5600e1a',
  'X-IBM-Client-Secret': 'ab638c18b5e9d598fd709deee92a2a54'
};

axios.post('https://sakshamuat.axisbank.co.in/gateway/api/v2/CRMNext/login', requestBody, {
  headers: headers,
  httpsAgent: agent
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
