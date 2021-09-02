const router = require('express').Router();
const { Country, Activity } = require("../db")

router.get('/', async function(_req, res) {
    const countries = await Country.findAll();
    res.json(countries);
});

router.get('/:id', async function(req, res) {
    const { id } = req.params;
    const country = await Country.findByPk(id, {
        include: Activity
        })
        res.json(country);
});

module.exports = router; 