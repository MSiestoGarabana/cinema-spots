module.exports = app => {

    const apiRoutes = require("./api.routes");
    app.use("/api", apiRoutes)

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);
    
    const authRoutes = require("./auth.routes");
    app.use("/", authRoutes);

    const userRoutes = require("./user.routes");
    app.use('/user', userRoutes);

    const markerRoutes = require("./marker.routes");
    app.use("/marker", markerRoutes);

    const movieRoutes = require("./movie.routes");
    app.use("/movie", movieRoutes);

    const listRoutes = require("./list.routes");
    app.use("/list", listRoutes)

}