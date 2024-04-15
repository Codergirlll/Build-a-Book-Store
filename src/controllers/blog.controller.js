
const BlogLogs = require("../models/blog.model")


const blogCreate = async (req, res) => {

    try {
        console.log("blogCreate")
        // console.log("request: ", req.body)

        let { title, description, author, state, body } = req.body


        let data = await BlogLogs.create({
            title, description, author, state, body
        })
        console.log("data: ", data)
        res.status(200).send({
            status: 0,
            message: "success",
            description: `Blog Created Successfully`,
            data: {
                _id: data._id,
                blog: data
            }
        })
    }
    catch (error) {

        res.status(400).send({
            status: 1,
            message: "failed",
            description: error.message
        })
    }
}


const blogUpdate = async (req, res) => {

    try {
        console.log("blogUpdate")
        console.log("request: ", req.body)
        console.log("id: ", req.params.id)


        let { title, description, author, state, body } = req.body

        let data = await BlogLogs.findOneAndUpdate(
            { _id: req.params.id },
            {
                title, description, author, state, body
            },
            { new: true }
        )

        res.status(200).send({
            status: 0,
            message: "success",
            description: `Blog Updated Successfully`,
            data: {
                _id: data._id,
                blog: data
            }
        })
    }
    catch (error) {

        res.status(400).send({
            status: 1,
            message: "failed",
            description: error.message
        })
    }
}


const blogDelete = async (req, res) => {
    console.log("blogById")

    try {

        let data = await BlogLogs.findOneAndDelete(
            { _id: req.params.id }
        )
        res.status(200).send({
            status: 0,
            message: "success",
            description: `Blog Delete successfully`,
            data: {
                _id: data._id,
                blog: data
            }

        })
    }
    catch (error) {
        res.status(400).send({
            status: 1,
            message: "failed",
            description: error.message
        })
    }
}


const allBlog = async (req, res) => {
    console.log("allBlog")
    try {

        let data = await BlogLogs.find()
        res.status(200).send({
            status: 0,
            message: "success",
            description: `All Bolgs`,
            data: {
                tatalBlogs: data.length,
                blogs: data
            }

        })
    }
    catch (error) {

        res.status(400).send({
            status: 1,
            message: "failed",
            description: error.message
        })
    }
}


const blogById = async (req, res) => {
    console.log("blogById")

    try {

        let data = await BlogLogs.findOne({ _id: req.params.id })

        res.status(200).send({
            status: 0,
            message: "success",
            description: `Getting Blog By Id`,
            data: {
                _id: data._id,
                blog: data
            }
        })
    }
    catch (error) {

        res.status(400).send({
            status: 1,
            message: "failed",
            description: error.message
        })
    }
}


module.exports = {
    blogCreate,
    blogUpdate,
    blogDelete,
    allBlog,
    blogById,
}


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Codergirlll/Build-a-Book-Store.git
// git push -u origin main