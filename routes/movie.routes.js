const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')
const moviesApiHandler = require('../services/moviesByName-api.service')

router.get("/search", (req, res, next) => {
    res.render('movies/movies-search')
})

router.post("/search", (req, res, next) => {
    const {title} = req.body

    moviesApiHandler
        .findMovieByName(title)
        .then(response => res.render('movies/movies-list', {movies: response.data.results, title: title}))
        .catch(err => next(err)) 
})

router.get("/:id", (req, res, next) => {
    const {id} = req.params

    moviesApiHandler
    .findMovieByID(id)
    .then(response => {res.render('movies/movies-detail', {movieData: response.data})})
    .catch(err => next(err))
})



module.exports = router