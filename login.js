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
      "encryptedRequest": "eyJ0eXAiOiJKV1QifQ==.eyJEYXRhIjp7InVzZXJOYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IkF4aXNAMTIzNCJ9LCJSaXNrIjp7fX0=.eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJEYXRhIjp7InVzZXJOYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IkF4aXNAMTIzNCJ9LCJSaXNrIjp7fSwiaWF0IjoxNzA4NjgyODUyLCJleHAiOjE3MDg2ODY0NTJ9.DWe2DSjyqWycI6MT1O8R4ROldGa1IJ8UdXg17RMQpbnjU94XZJNcnPLSyYAvl6zpWra7xMoxx16BXoJVP3DXsSkEcJ9EJWQkXr1GzcxOoaOp_XKaDsKJIDMBMIyET0HCk4htkjAKCQ4pK1pX5T0IAffErKNk6b0-uljQlrTumzqCy6H7-G6H24ovSQi2JweRZl-5REayib-tCv-9TcHvQY3mIuLPmP9NGV8j9yIzJgQDagBSsP8o3x_V5wuwAiELlISgJrsT4s3N5GwXiB5JuNNSIyd7TXyQNB6H8SJjTasUia7qrO3pCexPSaxn9GeLkQtJ92pnEzsWYgswhKU4kA"
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
