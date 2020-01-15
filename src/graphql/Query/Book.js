const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const books = async () => {
  const boo = await Book.query()
  return boo
}

const book = async (obj, { bookId }) => {
  const b = await Book.query().findById(bookId)
  return b
}

const author = async ({ authorId }) => {
  const a = await Author.query().findById(authorId)
  return a
}

const publisher = async ({ publisherId }) => {
  const p = await Publisher.query().findById(publisherId)
  return p
}

const resolver = {
  Query: {
    books,
    book,
  },
  Book: {
    author,
    publisher,
  },
}

module.exports = resolver
