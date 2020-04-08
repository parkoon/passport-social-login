const express = require('express')
const http = require('http')
const passport = require('passport')
const session = require('express-session')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()
const server = http.createServer(app)

const PORT = process.env.PORT || 5000

const dotenv = require('dotenv')
dotenv.config()

console.log()

app.use(
  session({
    secret: process.env['SESSION_SECRET'],
    cookie: { maxAge: 60 * 60 * 1000 },
    resave: true,
    saveUninitialized: false,
  })
)

app.use(passport.initialize())
app.use(passport.session())

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

passport.serializeUser((user, done) => {
  console.log('serialize user', user)
  done(null, user) // user 객체가 deseriallizeUser로 전달
})
passport.deserializeUser((user, done) => {
  console.log('deserialize user', user)
  done(null, user) // 여기서 전달되는 user 가 req.user
})

app.get('/login/google', passport.authenticate('google', { scope: ['profile'] }))
app.get(
  '/login/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('callback login', req.user)
    res.redirect('/')
  }
)

app.get('/', (req, res) => {
  console.log(req.user)
  res.send('Passport Federated Login')
})

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

server.listen(PORT, () => console.log(`Server is runngin on ${PORT}`))
