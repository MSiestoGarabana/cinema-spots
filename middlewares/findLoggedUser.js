const findLoggedUser = (req) => {
    return req.session.currentUser
}
modules.exports = {findLoggedUser}
