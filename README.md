# 소셜 로그인 with passport.js

## 실행하기전 프로젝트 셋업

`.env` 파일을 **루트**에 생성하고 아래 빈 값을 채워 넣는다. `.env.sample` 참고!

```js
GOOGLE_CLIENT_ID= // google client id
GOOGLE_CLIENT_SECRET= // google client secret
GOOGLE_CALLBACK= // google callback url

FACEBOOK_CLIENT_ID= // facebook client id
FACEBOOK_CLIENT_SECRET= // facebook client secret
FACEBOOK_CALLBACK= // facebook callback url

NAVER_CLIENT_ID= // naver client id
NAVER_CLIENT_SECRET= // naver client secret
NAVER_CALLBACK= // naver callback url

KAKAO_CLIENT_ID= // kakao client id
KAKAO_CLIENT_SECRET= // kakao client secret
KAKAO_CALLBACK= // kako client callback

SESSION_SECRET= // passport에서 사용할 session의 secret
```

## 실행

```bash
$ npm install
$ npm start
```
