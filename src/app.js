
const express = require("express")
const app = express()

require("dotenv").config()
const port = process.env.PORT || 4000

app.use(express.json())
app.use("/", require("./routes/route"))
app.use(express.urlencoded({ extended: true }))

require("./db/conn")


app.listen(port, () => {
    console.log(`Server is running at port no. ${port}`)
})