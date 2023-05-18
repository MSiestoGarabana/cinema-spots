const express = require('express')
const router = express.Router()

const List = require('../models/List.model')
const Movie = require('../models/Movie.model')


//Create list
router.get('/create', (req, res, next) => {

    res.render('lists/list-create')
})

router.post('/create', (req, res, next) => {

    const { name } = req.body
    const { _id: owner } = req.session.currentUser

    List
        .create({ name, owner })
        .then(() => res.redirect('/movie/search'))
        .catch(err => next(err))

})


//List of lists
router.get('/:id', (req, res, next) => {

    const { _id: owner } = req.session.currentUser

    List
        .find({ owner })
        .then(list => res.render('lists/list-list', { list }))
        .catch(err => next(err))

})


//List of movies in a list
router.get('/:id/details', (req, res, next) => {

    const { id } = req.params

    List
        .findById(id)
        .populate('movies')
        .then(list =>
             res.render('lists/list-details',  {list} )
             )
        .catch(err => next(err))
    
})


module.exports = router