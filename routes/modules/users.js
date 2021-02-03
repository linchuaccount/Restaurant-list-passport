const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')
const bcrypt = require('bcryptjs')

router.get('/login', (req, res) => {
  res.render('login')
})

//驗證登入狀態，加入middleware，驗證request登入狀態
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
})
)

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const errors = []

  if (!name || !email || !password || !confirmPassword) {
    errors.push({ message: '所有欄位皆為必填。' })
  }
  if (password != confirmPassword) {
    errors.push({ message: '密碼與確認密碼不相同。' })
  }
  if (errors.length) {
    return res.render('register', {
      errors, name, email, password, confirmPassword
    })
  }
  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.push({ message: '這個 Email 已註冊過。' })
        return res.render('register', {
          errors,
          name,
          email,
          password,
          confirmPassword
        })
      } else {
        return bcrypt
          .genSalt(10)
          .then(salt => bcrypt.hash(password, salt))
          .then(hash => User.create({
            name, email, password: hash
          }))
          .then(() => res.redirect('/'))
          .catch(err => console.log(err))
      }
    })
})

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已登出。')
  res.redirect('/users/login')
})
module.exports = router