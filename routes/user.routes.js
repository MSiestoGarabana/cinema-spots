const express = require('express')
const router = express.Router()

const User = require('../models/User.model')

//Users lists
router.get('/', (req, res, next) => {

    User
    .find()
    .then(user => res.send("users/user-list", { user } ))
    .catch(err => next(err))

})


//User profile
router.get('/:id', (req, res, next) => {

    const { id } = req.params
    
    const userRole = {

        isADMIN: req.session.currentUser?.role === "ADMIN",
        isUSER: req.session.currentUsesr?._id === id
    }

    User
        .findById(id)
        .then(user => res.render("users/user-profile", {user, userRole}))
        .catch(err => next(err)) 
})

 

//Modify users profile
router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    User 
        .findById(id)
        .then(user => res.render('users/user-edit', user))
        .catch(err => next(err))
})

router.post('/:id/edit', (req, res, next) => {

    const { name, email, password, rol, description, avatar, country } = req.body
    const { id } = req.params

    User
        .findByIdAndUpdate(id, { name, email, password, rol, description, avatar, country })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})


//Delete user
router.post('/:id/delete', (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

module.exports = router