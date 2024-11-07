const express = require("express")

const router = express.Router()

router.get('/', async (req, res) => {
    res.render('pages/index') // serve para devolvermos as views
})

module.exports = router;