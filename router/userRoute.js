const express = require("express")
const router = express.Router()

const { signup } = require("../controllers/userController")

router.get("/", (req, res) => {
    res.send("Home router")
})

router.post("/signup", signup)

module.exports = router;

