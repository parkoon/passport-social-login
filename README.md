# Federated Social Login with Passport

## Project Setup

1. `config/secret.js` 파일 생성

   - `config/secret.sample.js` 을 참고하여, Google, Kakao ...에서 받은 정보들을 입력해줍니다.

   ```js
   module.exports = {
     GOOGLE_CLIENT_ID: 'xxx', // google client id
     GOOGLE_CLIENT_SECRET: 'xxx', // google client secret
   }
   ```
