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
        const country = await Country.findAll({
            where : {
                id : id
            }
        })
        await activityCreated.addCountries(country);
        return res.send("Actividad crada")
    } catch (err) {
        res.send("Error")
    }
 });

router.delete()

module.exports = router;