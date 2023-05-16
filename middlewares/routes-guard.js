const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.redirect('/login')
}

const checkRoles = (...admittedRoles) => (req, res, next) => {

    const isAdmitted = admittedRoles.includes(req.session.currentUser.role)

    if (isAdmitted) {
        next()
    } else {
        res.render('auth/login', { errorMessage: 'Unauthorized' })
    }
}

const checkUser = (req, res, next) => {

    if (req.params.id === req.session.currentUser._id || req.session.currentUser.role === "ADMIN") {
        next()
    }
    else {
        res.render('auth/login', { errorMessage: 'Unauthorized' })
    }
}

module.exports = { isLoggedIn, checkRoles, checkUser }