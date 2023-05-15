const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.redirect('/user/login')
}

const isLoggedOut = (req, res, next) => {
    !req.session.currentUser ? next() : res.redirect('/user/')
}

module.exports = { isLoggedIn, isLoggedOut }