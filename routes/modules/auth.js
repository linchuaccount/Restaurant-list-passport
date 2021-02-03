const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['email', 'public_profile'] //向Facebook要資料
}))

router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

module.exports = router