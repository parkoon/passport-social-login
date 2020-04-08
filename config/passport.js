const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const NaverStrategy = require('passport-naver').Strategy
const KakaoStrategy = require('passport-kakao').Strategy

module.exports = (app) => (passport) => {
  app.use(passport.initialize())
  app.use(passport.session())

  /**
   * Serialize
   */
  passport.serializeUser((user, done) => {
    console.log('serialize user', user)
    done(null, user) // user 객체가 deseriallizeUser로 전달
  })

  /**
   * Deserialize
   */
  passport.deserializeUser((user, done) => {
    console.log('deserialize user', user)
    done(null, user) // 여기서 전달되는 user 가 req.user
  })

  /**
   * Google Strategy
   */
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env['GOOGLE_CLIENT_ID'],
        clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
        callbackURL: process.env['GOOGLE_CALLBACK'],
      },
      function (accessToken, refreshToken, profile, done) {
        console.log('accessToken', accessToken)
        console.log('refreshToken', refreshToken)
        console.log('profile', profile)
        done(null, profile)
      }
    )
  )

  /**
   * Facebook Strategy
   */
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env['FACEBOOK_CLIENT_ID'],
        clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
        callbackURL: process.env['FACEBOOK_CALLBACK'],
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log('accessToken', accessToken)
        console.log('refreshToken', refreshToken)
        console.log('profile', profile)
        return cb(null, profile)
      }
    )
  )

  /**
   * Naver Strategy
   */
  passport.use(
    new NaverStrategy(
      {
        clientID: process.env['NAVER_CLIENT_ID'],
        clientSecret: process.env['NAVER_CLIENT_SECRET'],
        callbackURL: process.env['NAVER_CALLBACK'],
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log('accessToken', accessToken)
        console.log('refreshToken', refreshToken)
        console.log('profile', profile)
        return cb(null, profile)
      }
    )
  )

  /**
   * Kakao Strategy
   */
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env['KAKAO_CLIENT_ID'],
        clientSecret: process.env['KAKAO_CLIENT_SECRET'],
        callbackURL: process.env['KAKAO_CALLBACK'],
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log('accessToken', accessToken)
        console.log('refreshToken', refreshToken)
        console.log('profile', profile)
        return cb(null, profile)
      }
    )
  )
}
