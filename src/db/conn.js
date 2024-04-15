

const mongoose = require("mongoose")

mongoose.connect(process.env.MongoDB_URL)
    .then(() => {

        console.log(`Database is connected successfully`)

    })
    .catch((error) => {

        console.log(`Not connected from the Datebase
Error: ${error.message}`)

    })