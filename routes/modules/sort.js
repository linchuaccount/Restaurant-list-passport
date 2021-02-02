const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

//餐廳分類排列
router.get('/:type/:method', (req, res) => {
  const userId = req.user._id 
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

  Restaurant.find({userId})
    .lean()
    .sort({ [type]: [method] })
    .then(restaurants => res.render('index', { restaurants, currentSelected }))
    .catch(error => console.error(error))
})

module.exports = router