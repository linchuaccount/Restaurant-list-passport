const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

//餐廳分類排列(參考同學寫法)
router.get('/:type/:method', (req, res) => {
  const type = req.params.type
  const method = req.params.method

  const routerstype = { 
    rating_desc: "評分: 高至低",
    rating_asc: "評分: 低至高",
    name_desc: "店名: A到Z",
    name_asc: "店名: Z到A",}

  const listtype = `${type}_${method}`
  const currentSelected = `${routerstype[listtype]}`

  Restaurant.find()
    .lean()
    .sort({ [type]: [method] }) 
    .then(restaurants => res.render('index', { restaurants, currentSelected }))
    .catch(error => console.error(error))
})

module.exports = router