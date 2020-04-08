const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/login/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
  '/login/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (req, res) => {
    console.log('callback login from google', req.user)
    res.redirect('/')
  }
)
router.get('/login/facebook', passport.authenticate('facebook', { scope: ['public_profile'] }))
router.get(
  '/login/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/login' }),
  (req, res) => {
    console.log('callback login from facebook', req.user)
    res.redirect('/')
  }
)

router.get('/login/naver', passport.authenticate('naver'))
router.get('/login/naver/callback', passport.authenticate('naver', { failureRedirect: '/auth/login' }), (req, res) => {
  console.log('callback login from naver', req.user)
  res.redirect('/')
})

router.get('/login/kakao', passport.authenticate('kakao'))
router.get('/login/kakao/callback', passport.authenticate('kakao', { failureRedirect: '/auth/login' }), (req, res) => {
  console.log('callback login from kakao', req.user)
  res.redirect('/')
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    req.logout()
    res.redirect('/')
  })
})
module.exports = router
