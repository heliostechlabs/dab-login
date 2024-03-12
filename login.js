
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
      "encryptedRequest": "eyJhbGciOiJSUzI1NiJ9.ZXlKbGJtTWlPaUpCTWpVMlIwTk5JaXdpWVd4bklqb2lVbE5CTFU5QlJWQXRNalUySW4wLkM3cVNkaDJmRF9mSnNUSWNYdV9BWFhoenNvOVZsVHhVbkd6OTZuTDMzbUFEemRoQ3VQT0xqU3RVdzRLNmQwZ1NQZjBHcUs2U0wweWxoMzZ4ZEFpcnRqeE9halJTaENnUXBUNVpGeTlncU94OTd0QnVJWnozdFFWWnBoWk5YdTNnQVdTWEsxTXp1WGlSWHZUeDBoZkoxTHh5RkFkZTg5Q0psS25tQW9Lc0pqZTQzdGQ1S2F2U0N4dmJmcG5VTDJXSHpPRXVxd3Jma3hwQnhoa2J4NE1xb0hBV0FTRVpfc2oyR05Fa1d1aUxFYWdsYUF5aXNCcXVEWHMxVWM2SU1renZadGpNR000aDlqWW1IOTIwZW9GWHdTT1laNlZJVEV3aF9uTm0tNDVDWnFUVUJ6d081MmNQc1lxR01BeVh4WTlJeFN6MnE0RHEwemRwZzNhbm5WT3J0Zy5waTR3UXhvbTRJcm1QN0FfLnJJQ2lYZzBfWF9xcTU0YjVCeGMtQ1FXT0h5azVQeXVUak9DaGZDcWFCbkNadnUxelRua3A2LTNPUU9UeXZQX0h4WmU1TWFDQmhlX0RRdzBCY0tnLkoxY0F1MEUxdU9LYXJWWjRtMXhBTmc.O9a4wOaOiynblBPL7WUfnOGKezEpXKC1u-jOVS0-3X3St4xS8WJjzukfz5D8QtG2-iXntxr956A8DDRtH4w8mWkjj-yzfDa1EasN5k7L3LWHKC21MzgtQYfD6EDLUgb-_r9N544huwdqOxqy8TNeGoPZGB2vLghgbjoH02jm54zz2RxEodMpjNagBFA_D-coExYVUieJM2XzbJmNnsDT4bkdIxeNrr3VYS2X_OUjRpBByGQ4sCLSZVDpUHyQCH5JoRxCkHBz4pol-NxtE106v64lYfUMqIy77PGt563ekEKqHssnlbog7fwgVpawa2bHOGGxNfwGkCj7dEAzsHXKjA"
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
