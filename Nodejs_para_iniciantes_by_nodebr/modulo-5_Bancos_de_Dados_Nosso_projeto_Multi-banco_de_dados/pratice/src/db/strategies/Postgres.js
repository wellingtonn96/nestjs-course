const ICrud = require('./interfaces/Interfaces')

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('item salvo no postgres!')
    }
}

module.exports = Postgres