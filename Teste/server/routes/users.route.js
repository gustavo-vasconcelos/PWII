const express = require("express")
const router = express.Router()
const controller = require("../controllers/users.controller")

router.post("/", controller.create)
router.get("/", controller.read)

module.exports = app => app.use("/users", router)