const express = require("express")
const app = express()
const port = 1317

const bodyParser = require("body-parser")
const router_user = require("./controller/hero.controller")

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.set("view engine", "ejs")
app.set("views", "view")

app.use("/user", router_user)

app.use("/", (req, res) => {
    res.send({
       status: "ok",
       api_version: ""
    })
})

app.listen(port, () => {
    console.log(`server api runing at port ${port} ✅ ` )
})

