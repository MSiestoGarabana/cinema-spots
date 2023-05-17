const getUserRoles = (user, profileId) => {

    const userRoles = {
        isAdmin: user?.role === "ADMIN",
        isOwner: user?._id === profileId,
        isAdminAndOwner: user?.role ==="ADMIN" && user?._id === profileId
    }

    return userRoles
}


module.exports = { getUserRoles }