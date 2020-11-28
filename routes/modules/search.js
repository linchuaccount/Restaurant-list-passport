const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

//餐廳搜尋功能
router.get('/', (req, res) => {
   const keyword = req.query.keyword
    Restaurant.find()
    .lean()
    .then(restaurants => restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  }))
  .then(restaurants => res.render('search', { restaurants, keyword }))
    // .then(restaurants => console.log(restaurants))
})

module.exports = router