
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        // unique: true
    },
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

})


UserSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id }, process.env.SecretKey, {
        expiresIn: '1h'
    })
    return token
}

const User_Model = new mongoose.model("User", UserSchema)

module.exports = User_Model
