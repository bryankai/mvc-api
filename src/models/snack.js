const uuid = require('uuid/v4')
const snacks = []

function getAll (limit) {
  return limit ? snacks.slice(0, limit) : snacks
}

function getOne (id) {
  const snack = snacks.find(snack => snack.id === id)
  if (!snack) return { errors:  `can not find ${id}`}
  return snack
}

function create (name) {
  const errors = []
  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const snack = { id: uuid(), name: name }
    snacks.push(snack)
    response = snack
  }
  return response
}

function update (id, name) {
  const snack = getOne(id)
  const index = snacks.indexOf(snack)
  snacks[index].name = name
  return snacks[index]
}

function remove (id) {
  const snack = getOne(id)
  console.log(snack);
  const index = snacks.indexOf(snack)
  return snacks.splice(index,1)
}

module.exports = { getAll, getOne, create, update, remove }
