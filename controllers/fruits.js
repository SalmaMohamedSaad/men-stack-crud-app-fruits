const Fruit = require('../models/Fruit')

const newFruit = (req, res) => {
  res.render('fruits/new.ejs')
}

const create = async (req, res) => {
  if (req.body.isReadyToEat == 'on') {
    req.body.isReadyToEat = true
  } else {
    req.body.isReadyToEat = false
  }
  await Fruit.create(req.body)
  res.redirect('/fruits/new')
}

const index = async (req, res) => {
  const fruits = await Fruit.find()
  res.render('fruits/index.ejs', { fruits })
}

const show = async (req, res) => {
  const id = req.params.id
  const fruit = await Fruit.findById(id)
  res.render('fruits/show.ejs', { fruit })
}
const deleteFruit = async (req, res) => {
  const id = req.params.id
  await Fruit.findByIdAndDelete(id)
  res.redirect('/fruits')
}
const edit = async (req, res) => {
  const id = req.params.id
  const fruit = await Fruit.findById(id)
  res.render('fruits/edit.ejs', { fruit })
}
module.exports = {
  newFruit,
  create,
  index,
  show,
  delete: deleteFruit,
  edit
}
