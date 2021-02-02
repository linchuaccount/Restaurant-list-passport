const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

//載入new新增頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

//接住new新增頁面的資料，並送進db儲存
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  //解構賦值:可以把物件裡的屬性一項項拿出來存成變數
  return Restaurant.create({
    name, name_en, category, image, location, phone, google_map, rating, description, userId
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//進入detail詳細頁面路由
router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne( {_id, userId} )
    .lean()
    .then((restaurant) => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

//進入edit修改資料頁面
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

//接住edit修改頁面的資料，並送進db儲存
router.put('/:id', (req, res) => {
  const userId = req.user._id 
  const _id = req.params.id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  return Restaurant.findOne({ _id, userId })
    .then(restaurant => {
      //物件導向Object.assign
      Object.assign(restaurant, req.body)
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(error => console.log(error))
})

//刪除資料路由
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router