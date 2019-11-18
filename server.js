const path = require("path")
const express = require("express")
require("dotenv").config()

const app = express()
app.use(express.static(path.join(__dirname, "build")))

app.use("/", async (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"))
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Application running on port ${ port }`))
