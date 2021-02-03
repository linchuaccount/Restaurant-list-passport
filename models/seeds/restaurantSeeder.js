const bcrypt = require('bcryptjs')
const Restaurant = require('../restaurant')
const User = require('../user')
const db = require('../../config/mongoose')
const restaurantList = require('./restaurant.json').results //<--要注意裡面是一個陣列資料results，results裡面才裝餐廳物件



const seedUser = [
  {
    name: 'user1',
    email: 'user1@example.com',
    password: '12345678',
  },{
    name: 'user2',
    email: 'user2@example.com',
    password: '12345678'
}
]

db.once('open', () => {
  seedUser.forEach(user=>{
    bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(seedUser.password, salt))
    .then(hash => User.create({
      name: seedUser.name,
      email: seedUser.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      if (user.name === "user1") {
        return Promise.all(Array.from(
          { length: 3 },
          (_, i) => Restaurant.create({ ...restaurantList.results[i], userId }) //參考同學寫法
        ))
      }
      return Promise.all(Array.from(
          { length: 3 },
          (_, i) => Restaurant.create({ ...restaurantList.results[i+2], userId })
        ))
    })
    .then(() => {
      console.log('done.')
      process.exit()
    })
  })
    
  }
)