const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant')
const app = express()

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mogodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

//載入Restaurant models
app.get('/', (req, res) => {
  Restaurant.find()
  .lean()
  .then( restaurants => res.render('index', { restaurants }))
  .catch(error => console.error(error))
  
})


app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})