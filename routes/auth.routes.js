const router = require("express").Router()
const bcrypt = require('bcryptjs')
const saltRounds = 10

const User = require("../models/User.model")

const { isLoggedOut } = require('../middlewares/route-guards')


//Sign Up
router.get('/signup', (req, res, next) => res.render('auth/signup'))

router.post('/signup', (req, res, next) => {

    const { name, email, password, rol, description, avatar, country } = req.body

    bcrypt
        .getSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPassword => User.create({ name, email, password: hashedPassword, rol, description, avatar, country }))
        .then(createdUser => res.redirect('/'))
        .catch(error => next(error))
})


//Log In
router.get('/login', (req, res, next) => res.render('auth/login'))

router.post('/login', (req, res, next) => {

    const { email, password } = req.body

    if ( email.length === 0 || password.length === 0) {
        
        res.render('auth/login', {errorMessage: 'You must fill all the fields'})
        return
    }

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login', { errorMessage: 'Email not found in the database' })
                return
            } else if (bcrypt.compareSync(userPwd, user.password) === false) {
                res.render('auth/login', { errorMessage: 'Incorrect password' })
                return
            } else {
                req.session.currentUser = user
                res.redirect('/')
            }
        })
        .catch(error => next(error))
})

// Log Out
router.post('/logout', (req, res, next) => {

    req.session.destroy(() => res.redirect('/login'))

})

module.exports = router