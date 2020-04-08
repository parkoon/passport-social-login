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

app.get('/', (req, res) => res.send('<h3>Node Passport Social Login</h3>'))

server.listen(PORT, () => console.log(`Server is runngin on ${PORT}`))
