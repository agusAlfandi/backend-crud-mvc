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

router.post('/add', (req, res) => {
    Hero.addHero(req, res)
})

router.post('/delete', (req, res) => {
    Hero.deleteHero(req, res)
})

module.exports = router
