
const express = require("express")
const route = express.Router()

const { auth } = require("../middleware/auth")

// User Routes
const { register, login } = require("../controllers/User.controller")

route.post("/user/register", register)
route.post("/user/login", login)


// Blog Routes
const {
    blogCreate,
    blogUpdate,
    blogDelete,
    allBlog,
    blogById
} = require("../controllers/blog.controller")

route.post("/blog/create", blogCreate)
route.put("/blog/update/:id", blogUpdate)
route.delete("/blog/delete/:id", blogDelete)
route.get("/blog/allblog", allBlog)
route.get("/blog/blog.by.id/:id", auth, blogById)

module.exports = route
