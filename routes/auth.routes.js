const router = require("express").Router()
const bcrypt = require('bcryptjs')
const saltRounds = 10
const uploaderMiddleware = require('../middlewares/uploader.middleware')
const User = require("./../models/User.model")


//Sign Up
router.get('/signup', (req, res, next) => {
    
    res.render('auth/signup')

})

router.post('/signup', uploaderMiddleware.single('avatar'), (req, res, next) => {

    const { path: avatar } = req.file

    const { name, email, password, role, description, country } = req.body

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPassword => User.create({ name, email, password: hashedPassword, role, description, avatar, country }))
        .then(() => res.redirect('/login'))
        .catch(error => next(error)) 
})


//Log In
router.get('/login', (req, res, next) => {
    
    res.render('auth/login')

})

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
            
            } else if (bcrypt.compareSync(password, user.password) === false) {
                
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