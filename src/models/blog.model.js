
const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    author: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },
    realcount: {
        type: Number,
        default: 0
    },
    readingTime: Number,
    tags: [String],
    body: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }

})

const Blog_Model = new mongoose.model("Blog", BlogSchema)

module.exports = Blog_Model