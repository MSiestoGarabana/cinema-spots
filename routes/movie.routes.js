const express = require('express');
const router = express.Router();
const moviesApiHandler = require('../services/moviesByName-api.service')

router.get("/search", (req, res, next) => {
    res.render('movies/movies-search')
})

router.post("/search", (req, res, next) => {
    const {title: title} = req.body

    moviesApiHandler
        .findMovieByName(title)
        .then(response => {
            let movies = []
            response.data.results.map(movie=>{
                if(!movie.genre_ids.includes(16)){
                    movies.push(movie)
                }
            })
            res.render('movies/movies-list', {movies, title})
        })
        .catch(err => next(err)) 
})

router.get("/:id", (req, res, next) => {
    const {id} = req.params
    const mapsKey = process.env.API_KEY_MAPS
    
    moviesApiHandler
    .findMovieByID(id)
    .then(response => {res.render('movies/movies-detail', {movieData: response.data, mapsKey})})
    .catch(err => next(err))
})

module.exports = router