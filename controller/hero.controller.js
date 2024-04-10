const express = require("express")
const router = express.Router()
const Hero = require("../model/Hero.model")

router.get('/', (req, res) => {
    Hero.getData(res)
})

router.get('/:id', (req, res) => {
    Hero.getHeroByID(req, res)
})

module.exports = router