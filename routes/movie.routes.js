const express = require('express');
const router = express.Router();
const moviesApiHandler = require('../services/moviesByName-api.service')

router.get("/search", (req, res, next) => {

    res.render('movies/movies-search')
})

router.post("/search", (req, res, next) => {

    const { title } = req.body

    moviesApiHandler
        .findMovieByName(title)
        .then(({ data }) => {
            let movies = data.results.filter(movie=> !movie.genre_ids.includes(16))
            res.render('movies/movies-list', { movies, title })
        })
        .catch(err => next(err)) 
})

router.get("/:id", (req, res, next) => {

    const { id } = req.params
    const { API_KEY_MAPS: mapsKey } = process.env
    
    moviesApiHandler
        .findMovieByID(id)
        .then(({ data }) => res.render('movies/movies-detail', { movieData: data, mapsKey }))
        .catch(err => next(err))
})

module.exports = router