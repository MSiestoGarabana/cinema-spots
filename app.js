require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");

const app = express();

require("./config")(app);
require('./config/session.config')(app)


const capitalize = require("./utils/capitalize");
const projectName = "movie-spot";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

app.use((req, res, next) => {
    
    app.locals.isLoggedUser = req.session.currentUser
    next()
})

app.use((req, res, next) => {
    
    app.locals.notLoggedUser != req.session.currentUser
    next()
})

// app.use((req, res, next) => {

//     app.locals.checkOwnerOrAdmin = req.session.currentUser
//     next()
// })


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const userRoutes = require("./routes/user.routes");
app.use('/user', userRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const markerRoutes = require("./routes/marker.routes");
app.use("/marker", markerRoutes);

const movieRoutes = require("./routes/movie.routes");
app.use("/movie", movieRoutes);

require("./error-handling")(app);

module.exports = app;
