const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.json("Todo bien")
})

module.exports = router