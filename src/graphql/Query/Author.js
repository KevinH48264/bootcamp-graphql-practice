const Author = require('../../models/Author')
const Address = require('../../models/Address')

const authors = async () => {
  const au = await Author.query()
  return au
}

const address = async ({ addressId }) => {
  const add = await Address.query().findById(addressId)
  return add
}

const resolver = {
  Query: {
    authors,
  },
  Author: {
    address,
  },
}

module.exports = resolver
