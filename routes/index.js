// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入 各個路由 的 模組程式碼
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
const sort = require('./modules/sort')
const users = require('./modules/users')

// 將網址結構符合 / 字串的 request 導向 對應的模組程式碼 
router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/search', search)
router.use('/sort', sort)
router.use('/users', users)


// 匯出路由器
module.exports = router