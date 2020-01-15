const Address = require('../../models/Address')
const Publisher = require('../../models/Publisher')

const publishers = async () => {
    const au = await Publisher.query()
    return au
}

const publisher = async (obj, { publisherId }) => {
    const a = await Publisher.query().findById(publisherId)
    return a
}

const address = async ({ authorId }) => {
    const add = await Address.query().findById(authorId)
    return add
}

const resolver = {
    Query: {
        publishers,
        publisher,
    },
    Publisher: {
        address,
    },
}

module.exports = resolver
