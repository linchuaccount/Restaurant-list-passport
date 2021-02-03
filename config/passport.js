const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

module.exports = app => {
  //初始化Paspport模組
  app.use(passport.initialize())
  app.use(passport.session())
  //設定LocalStrategy
  passport.use(new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, ( req, email, password, done) => {
    User.findOne({ email })
      .then(user =>{
        if(!user) {
          return done(null, false, req.flash('warning_msg', 'email尚未註冊 , 請前往註冊。'))
        }
        if (user.password !== password) {
          return done(null, false, req.flash('warning_msg', '帳號或密碼輸入錯誤。'))
        }
        return done(null, user)
      })
      .catch(err => done(err, false))
  }))
  //序列化和反序列化
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id)
    .lean()
    .then(user => done(null, user))
    .catch(err => done(err, null))
  })
}