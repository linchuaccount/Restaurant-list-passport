const Restaurant = require('../restaurant')
const db = require('../../config/mongoose')
const restaurantList = require('./restaurant.json').results //<--要注意裡面是一個陣列資料results，results裡面才裝餐廳物件


db.once('open', () => {
  for (let i = 0; i < restaurantList.length; i++) {
    Restaurant.create({
      id: restaurantList[i].id,
      name: restaurantList[i].name,
      name_en: restaurantList[i].name_en,
      category: restaurantList[i].category,
      image: restaurantList[i].image,
      location: restaurantList[i].location,
      phone: restaurantList[i].phone,
      google_map: restaurantList[i].google_map,
      rating: restaurantList[i].rating,
      description: restaurantList[i].description
    } )
  }
  console.log('done')
})