Name - Lead Name
Email - ankush.thakur.helios@gmail.com
Phone - 8544743818
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
      "encryptedRequest": "eyJhbGciOiJSUzI1NiJ9.eyJEYXRhIjp7InVzZXJOYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IkF4aXNAMTIzNCJ9LCJSaXNrIjp7fX0.d9sx26L1KY0wisKTAGCq4p6T-9BGdnwx7CNKTeZQr9qtDnMPdBNF3W6vLKjZ3sNz6bz9F6jOjldKy2IwG4InYQy_YHXqMtI12QzXMR_9t4_GWUxjzhq1TGYs5n-jIN2iqfv-5J_Ly7Z7HYIuWMYWTZIc98GqijBU1CkRNpSljBOKxHi37G5QqFRrg11bToHhggxARbhEEKOjRFaZM5QTjihJ20wTxJjyDGSwm_VC6hvJ4tSaqLIDgO4Phb0DPDljp3Zik6bfojUIi2CW2aDRwKxuBH0xqA_S1LQq8L7HHSWjJ_j6y4q2V6wJ29XmoL6eDwp1wmH9gyT2q2AYqCdl2g"
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
