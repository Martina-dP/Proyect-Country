const router = require('express').Router();
const { Activity } = require("../db")

router.delete('/:id', async function(req, res) {
    const { id } = req.params
    try {
         await Activity.destroy({
            where:{
                id:id
            }
        })
        return res.send("Actividad eliminada")
    } catch (error) {
        res.send("No se pudo eliminar")
    }
});

module.exports = router;