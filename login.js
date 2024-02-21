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
      "encryptedRequest": "eyJ0eXAiOiJKV1QifQ==.eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMzQ1NiJ9.eyJkYXRhIjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0lzSW10cFpDSTZJakV5TXpRMU5pSXNJbVZ1WXlJNklsSlRNalUySW4wLmV5SkVZWFJoSWpwN0luVnpaWEpPWVcxbElqb2lZV1J0YVc0aUxDSndZWE56ZDI5eVpDSTZJa0Y0YVhOQU1USXpOQ0o5TENKU2FYTnJJanA3ZlN3aWFXRjBJam94TnpBNE5EZzRNakl4TENKbGVIQWlPakUzTURnME9URTRNakY5LmxkQkxLSUFNS0gzSEdHMEl1cDF4NXo0SjFOVFpEVXN2bzlYbC15ODRuRkRZTmxpVm1HNDh2dUxSNlEzRHdQODFKWWtBQlA5TDZ5Z0R5YjhjZjFvYV9VVUxLakFHempELThCMHAtcDJPU3lodjhIaWxuSjRhX2pZZHB4RDFCQ1NrU1FCT0NSbVo3SWluQWtTT3l0Y3p2WERxRTNqUC11RUZlcWg4LUdydERnY2pwb05NWWFrRkNvWWdhTEh6MUhBd1V0RTV3YXJtRUduSy1LdE1rT3NLS29QOFBtYkRXc1hGalpBRVlCNjNXckcwemR4aDNyMF9TdExEZTNyby1seFE5WU9zaGZVc2htNEp6ejE1OV9IbjZXaTRnZnQxV3dSam5aUzR4VFdFY0FoSXZERmpvTl9YYThqeC1LNHpTT0JVMmNieHZlVXpqSUFabHhxQUlGcFNJdyIsImlhdCI6MTcwODQ4ODIyMSwiZXhwIjoxNzA4NDkxODIxfQ.rO4nF1Z4CrEin_S2BCku1-sIeKNLe-bjDZxhAJC_SBxbvQsBhz59eR1j7ZYHKWLxh9xBPI6PVjLEWKsN0Q55ZonHTrdDV3PgfaeyDyWwCrN3f_x1eK-RcWmnk3XTWK_5erPeRIbl348vK0oEd0qUxQ1Hy6QKxUmn9LtcvD0MobiHHAMHkm4AK1RaIMsJjhOuCeyKwt99FK8bP4yCLhD2jkiWsW_UaFtecY7vvQOrZYenmWQxw5XsbMb1FQcF9c_f1cMePBO3HecDiXbL779bPFRvv9hLA950g9DDC8-fgAlhDDfY9iJLoA4HcCgqVVlnvJQGSFq-yHkv3lwMrTuitQ"
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
