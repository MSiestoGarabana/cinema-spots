module.exports = app => {

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    const userRoutes = require("./user.routes");
    app.use('/user', userRoutes);

    const authRoutes = require("./auth.routes");
    app.use("/", authRoutes);

    const markerRoutes = require("./marker.routes");
    app.use("/marker", markerRoutes);

    const movieRoutes = require("./movie.routes");
    app.use("/movie", movieRoutes);
}