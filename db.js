const mongoose = require('mongoose')

module.exports = function () {
    const db = process.env.MONGO_URI

    mongoose.connect(db, {useUnifiedTopology: true})
    .then(() => ("Conectado a mongodb..."))
}
