const model = require('../models/snack')

function getAll (req, res, next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({ data })
}

function getOne (req, res, next) {
  const id = req.params.id
  const data = model.getOne(id)
  res.status(200).json({ data })
}

function create (req, res, next) {
  const name = req.body.name
  const data = model.create(name) //Error: model.create is not a function...

  if(data.errors) {
    return next({ status: 400, message: `Could not create new snack`, errors: data.errors })
  }
  res.status(201).json({ data })
}

function update (req, res, next) {
  const id = req.params.id
  const name = req.body.name
  console.log(name)
  const newSnack = model.update(id,name)
  res.status(200).json({ data: newSnack })
}

function remove (req, res, next) {
  const id = req.params.id
  const removedSnack = model.remove(id)
  res.status(200).json({ data: removedSnack })
}

module.exports = { getAll, getOne, create, update, remove, }
