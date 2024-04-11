const express = require("express")
const router = express.Router()
const Hero = require("../model/Hero.model")

router.get('/', (req, res) => {
    Hero.getData(res)
})

router.get('/:id', (req, res) => {
    Hero.getHeroByID(req, res)
})

router.post('/update', (req, res) => {
    Hero.updateHeroByID(req, res)
})

module.exports = router

// Agent pid 8468