const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

router.get("/search", (req, res, next) => {
    res.render('movies/movie-search')
})
router.post("/search", (req, res, next) => {

    get
    res.send("movies list")
})

module.exports = router