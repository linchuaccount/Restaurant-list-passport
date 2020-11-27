const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant')
const bodyParser = require('body-parser')
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
app.use(bodyParser.urlencoded({ extended: true }))

//載入Restaurant models
app.get('/', (req, res) => {
  Restaurant.find()
  .lean()
  .then( restaurants => res.render('index', { restaurants }))
  .catch(error => console.error(error))
})

//載入新增頁面new
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

//接住新增頁面的資料，並送進db儲存
app.post('/restaurants', (req, res) => {
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body 
  //解構賦值:可以把物件裡的屬性一項項拿出來存成變數
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })     
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//詳細頁面路由
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})