const router = require('express').Router();
const { Country, Activity } = require("../db")

router.get('/', async function( req, res) {
    const { name } = req.query;
    const countries = await Country.findAll();
    if (name){
        const filterName = await countries.filter(e =>
            e.name.toLowerCase().includes(name.toLowerCase()))
            res.send(filterName)
    } else {
    res.json(countries);
    }
});

router.get('/:id', async function(req, res) {
    const { id } = req.params;
    const country = await Country.findByPk(id, {
        include: Activity
        })
        res.json(country);
});

module.exports = router; 