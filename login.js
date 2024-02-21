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
      "encryptedRequest": "eyJhbGciOiJSUzI1NiJ9.ZXlKbGJtTWlPaUpCTWpVMlIwTk5JaXdpWVd4bklqb2lVbE5CTFU5QlJWQXRNalUySW4wLnRGMHE4eFhjYWdUMHhyb1BxSEx3SUFLNnVOQ2RaV3Q0M2o2QlJtRXlRQVRPbTdjc1lYX0poZjl0MExJUjY3d2RCZGNhNGpEa0tDeloyQzJrTW54NVI3WmlNemZpbHVXRzhhVTNXaUtJanZUWjdTY2Z3UXd1RGJJSmd1Um9RQXF0WFplZ3pqLXBTVVVzQkJZNk1DOUpRWXg4eEZpbkVwMEw0RkFPd3FBdG5qSHExMmY2UUpPOHRqSGIwZ2tRQmJUbnptbFh3ekk2WVNnSTBpSjBmS2RjakpiRkhjTVVFNVYybWRTVExvNFRmUkNNWmk4cUNKUjhIMVdWT2x1aWhac0NNR1BLdm5qcnlWUFJLX053dGZDOThZVW9IY1NkdlFMMlIxekRrRldWU190Z0ZUaXdUM1gtRkNrVWRhd2tkVG9aWVNUTG92M0xTZVcycDJ4eGpXRjFIdy42b1dOdFg1RC16eExSOTduLkxCdTBlaWZwYkt6aERZTzgyOUlIV0NsQ1NUUGxWaldOVXZtNDN2SjZOeC1mRU5SdDZ0U21VUVg3emJJQzZnVjFNaTVfcGRxMHNldHN6VXB2SzFNeE9DcDMta01TcmtiTms3OEZaVS1hSDNwbGM5bjBXRjRuRGlPTm1ZeEZJazRHTE00dkREc0lmQTdRbkEuWnY5QTVJVkZFYXJPLWpjUVVDaWI4Zw.sK2EXYJ_OQD7tpa46XCVFp22KN3izrE0mviuSDa24e_5Be49aw92S_-zq1GraO4lz-ftxtv6ct2qjSOCpGc-_zAmAgFUXpZqwTy8b6Q6vuuceeX2JL2dm7Wx1dvCUhHREMGRCaQLj8a88qOZUD2YhC9m92K1Em5eimQ7giIfDses_QpyWpjuFykwcLerWsKWFhkSx1xuQ44el_9i--VvaAFrNg06LXRa4gJuM5bv33ktLl33B_TmlRbVGksrR_VCcOUS7lch0dW028T37Oem8AFE4PBOAsCqCbNwfnF52EPqAh0L9S8GiwbGkCo_-ciDmZe4Cjz6SmdgYAgP0IPaPA"
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
