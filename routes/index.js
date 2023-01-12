module.exports = app => {

    const indexRoutes = require("./index.routes")
    app.use("/api", indexRoutes)

    // const constructionRoutes = require("./construction.routes")
    // app.use("/api/construction", constructionRoutes)

    // const userRoutes = require("./user.routes")
    // app.use("/api/user", userRoutes)


}