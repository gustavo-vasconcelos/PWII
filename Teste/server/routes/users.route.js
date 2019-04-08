const express = require("express")
const router = express.Router()
const controller = require("../controllers/users.controller")

router.get("/", controller.read)
//router.post("/", controller.create)


module.exports = app => app.use("/users", router)