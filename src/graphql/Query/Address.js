// Import Objection Models Here!
const Address = require('../../models/Address')

const addresses = async () => {
  const temp = Address.query()
  return temp
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Query: { addresses },

}

module.exports = resolver
