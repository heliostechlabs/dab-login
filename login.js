
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
      "encryptedRequest": "eyJhbGciOiJSUzI1NiJ9.ZXlKbGJtTWlPaUpCTWpVMlIwTk5JaXdpWVd4bklqb2lVbE5CTFU5QlJWQXRNalUySW4wLkM5RENlVVo5ZENBVXBGNVMydW9GNXpJR2pvN2NmWFpNSkZSNWZtODVvU0lxbGUyaVl0MWJQbVdqay1QbjA4M1ZFUC11eUtJMFEtS2F4d2pVejdSb01vU1hsZmlUMFlodXlSSU5lYWt0RlBCYzVjNE9LdUpYczlRc1VMTnZRdDhzTk11Q1ZfSDJyQXdwRjhVUVp2X1N1SERpbGJsRmlUbTQzNjF4SkpHa0tpR3RESnRwQ2JSOXo2ZS1sU0tkQUljVWtJMUNXWFBBbzBmMkVsTnFwYjRMQlBMYUc2UHEtZzl5UlpTM1BxdFJ0RXc2VVlMQ0hjZGJLb1lkdElMVUVkQUU5TlMtTno1Y1lUYldZbHFUMFBTallpZDBPTjUyaVNpcE50WFRNdldnTEFhaE5VZ0pZNGZVVnFfM3YyLTdfYVF5UmcxR2ZoNHgycWxSWDMzeWs2WDBrZy5tVUF2d3VjZmNoQzVoM3d1LmFpY09NQ0g5aEFyYXh6LU1Xd0o5bU93VmJTLVV6TnQwb2ktM1o1Tm95d3AycVdkVnJsX3ctem9Oal9oWjNRX2pKSHdwWHd6MFdMNnEwNVNJeFhkcG1qVFFxMFBCbDZmWFNzVTlmNl9id2M0c2hHYTBPMUtIdzAwTERHU3ZWUzlfX0lCTndFUGhrcHR5WncuX0RYeTIyZzRGbkwteEwzeW1mdGZ4UQ.Z1zbDd-QlQKg7tdm16Ly3K3_FVWbo-yRyuFeX06eX6zgKxgM-0siFQdhejKGORvQjUJsSsiYc980ClXSYGAsGHYkBwAfSSRTrCNUzJab63LFzbSwu8HurOtWT51m4N7E58vHzN-x0VCRVfnJQRhhIjhHEkgiP8RQfgo9F3fgWvhSERKS3g9fRi2YDBkHTRe2HwPSs2B9BKZFjGRF6Leiz_ddfJ1Fj4kJY5bRXcYkRyIVa6lXJ93cHAisBSV561U4FUzZ-9bST3I3gkhYoxQvzw8hG_saERpljhltNAdVIYK_oVIDUleBCT9JJTtcXl1WMsdVt5tdV5cczbxP8eeQhA"
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
