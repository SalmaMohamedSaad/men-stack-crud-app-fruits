require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override') // new
const morgan = require('morgan')
const fruitRoute = require('./routes/fruits')

const app = express()
const PORT = process.env.PORT
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method')) // new

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(morgan('dev'))

app.use(fruitRoute)

const newFruit = (req, res) => {
  res.render('fruits/new.ejs')
}
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`)
})
