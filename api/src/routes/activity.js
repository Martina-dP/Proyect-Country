const router = require('express').Router();
const { Country, Activity } = require("../db")

router.post('/activity', async function(req, res) {
    const {
        id,
        name,
        severity,
        duration,
        season } = req.body;

    const activityCreated = await Activity.create({
        name,
        severity,
        duration,
        season });

    try { 
        const countries = await Country.findAll({
            where : {
                id
            }
        })
        await activityCreated.addCountries(countries);
        return res.send("Actividad crada")
    } catch (err) {
        res.send("Error")
    }
 });

router.delete('/activity', async function(req, res) {

});

module.exports = router;