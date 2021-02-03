// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入 各個路由 的 模組程式碼
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
const sort = require('./modules/sort')
const users = require('./modules/users')
const auth = require('./modules/auth')

// 掛載驗證登入狀態用的middleware
const { authenticator } = require('../middleware/auth')

router.use('/users', users)
router.use('/restaurants', authenticator, restaurants)
router.use('/search', authenticator, search)
router.use('/sort', authenticator, sort)
router.use('/auth', auth)
router.use('/', authenticator, home)


// 匯出路由器
module.exports = router