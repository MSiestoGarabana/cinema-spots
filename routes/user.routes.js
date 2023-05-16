const express = require('express')
const router = express.Router()
const { isLoggedIn, checkRoles, checkUser } = require('../middlewares/routes-guard')
const uploaderMiddleware = require('../middlewares/uploader.middleware')
const User = require('../models/User.model')


//Users lists
router.get('/list', isLoggedIn, (req, res, next) => {

    User
    .find()
    .then(user => res.render("users/user-list", { user } ))
    .catch(err => next(err))

})


//User profile
router.get('/:id', isLoggedIn, (req, res, next) => {

    const { id } = req.params
    
    const userRole = {

        isADMIN: req.session.currentUser?.role === "ADMIN",
        isUSER: req.session.currentUser?._id === id
    }

    User
        .findById(id)
        .then(user => {
            console.log(userRole)
            res.render("users/user-profile", {user, userRole})
        })
        .catch(err => next(err)) 
})

 

//Modify users profile
router.get('/:id/edit', isLoggedIn, checkUser, (req, res, next) => {

    const { id } = req.params

    User 
        .findById(id)
        .then(user => res.render('users/user-edit', user))
        .catch(err => next(err))
})

router.post('/:id/edit', isLoggedIn, checkUser, uploaderMiddleware.single("avatar"), (req, res, next) => {

    const {path: avatar } =req.file
    const { name, email, password, role, description, country } = req.body
    const { id } = req.params

    User
        .findByIdAndUpdate(id, { name, email, password, role, description, avatar, country })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})


//Delete user
router.post('/:id/delete', isLoggedIn, checkRoles("ADMIN"), (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

module.exports = router