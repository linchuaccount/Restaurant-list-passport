const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

//餐廳分類排列
router.get('/:type/:method', (req, res) => {
  const type = req.params.type
  const method = req.params.method

  const routerstype = {
    rating: {
      desc: "評分: 高至低",
      asc: "評分: 低至高"
    },
    name: {
      desc: "店名: A到Z",
      asc: "店名: Z到A"
    }
  }

  const currentSelected = `${routerstype[type][method]}`

  Restaurant.find()
    .lean()
    .sort({ [type]: [method] })
    .then(restaurants => res.render('index', { restaurants, currentSelected }))
    .catch(error => console.error(error))
})

//在分類排列時進入detail詳細頁面路由
router.get('/:type/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

//在分類排列時進入edit修改資料頁面
router.get('/:type/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

//在分類排列時刪除資料路由
router.delete('/:type/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router