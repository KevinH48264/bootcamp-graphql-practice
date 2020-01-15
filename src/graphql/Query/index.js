const merge = require('lodash.merge')
const Author = require('./Author')
const Address = require('./Address')
const Book = require('./Book')
const Publisher = require('./Publisher')

const resolvers = [Author, Address, Book, Publisher]

module.exports = merge(...resolvers)
