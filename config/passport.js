const GoogleStrategy = require('passport-google-oauth20').Strategy

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
}
