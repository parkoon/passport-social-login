const express = require('express')
const http = require('http')
const passport = require('passport')

const app = express()
const server = http.createServer(app)

const PORT = process.env.PORT || 5000

const dotenv = require('dotenv')
dotenv.config()

/**
 * 데이터 베이스 세팅
 */
const configureDatabase = require('./config/database')
configureDatabase(process.env['MONGO_URI'])

/**
 * 세션 세팅
 */
const configureSession = require('./config/session')
configureSession(app)

/**
 * passport 세팅
 */
const configurePassport = require('./config/passport')(app)
configurePassport(passport)

/**
 * Routing
 */
const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  /**
   * req.user가 있는 경우는 소셜 로그인에 성공한 경우
   * passport에 의해 user가 주입됨 (deserialize 확인)
   */
  if (req.user) {
    res.send(`
        <h3>Login Success</h3>
        <a href="/auth/logout">Logout</a>
        <p>
            ${JSON.stringify(req.user, null, 2)}
        </p>
      `)
  } else {
    res.send(`
        <h3>Node Passport Social Login</h3>
        <a href="/auth/login/google">Login with Google+</a>    
    `)
  }
})

server.listen(PORT, () => console.log(`Server is runngin on ${PORT}`))
