require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app);
require('./config/session.config')(app)

app.locals.appTitle = `Cinema spot`;

app.use((req, res, next) => {
    app.locals.isLoggedUser = req.session.currentUser
    next()
})

require("./routes")(app)

require("./error-handling")(app);

module.exports = app;