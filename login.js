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
      "encryptedRequest": "eyJ0eXAiOiJKV1QifQ==.eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMzQ1NiJ9.eyJEYXRhIjp7InVzZXJOYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IkF4aXNAMTIzNCJ9LCJSaXNrIjp7fSwiaWF0IjoxNzA4MzI0NTAwLCJleHAiOjE3MDgzMjgxMDB9.meN2QdfAHAAymipnF-BmXFQy-SniRAacRw5XAIs6HHU_leWQLx3Pm4Wgx_sxuz_02Ik6Y4VxWzXwlNmFcOZaZ1O-BJSnDCOm_N0AT4KpB02JeG4zQKBerDNmRYlc-SWu6RN562aNsx6m3ISXnlPmSD6Ju3_1IDTDpWUP8-uKIbVDWhhgukJWHzd_GWNJNM6rAY9bBxH1sGf9iOmJ2ggibun5IrgVBnaOxMzIPO1gEO5hXHTwsFly-GStIl9ziutWEXY9osNphUOaoz21QR10XWiEypgLVThYww35SfQPYHAcg1xSh1y-W7omXM3GRaHI0r7LHh6EIMozzk4xl2QV0A"
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
