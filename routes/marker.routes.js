const express = require("express")
const router = express.Router()

//const Marker = require('../models/Marker.model')

router.post("/create/title/:id", (req, res, next) => {
    res.send(req.body)
///PASAR CONTRIBUIDOR

   /*  const {id} = req.params
    const {
        name,
        description,
        contributor,
        location,
        movieFrame} = req.body */

})


module.exports = router