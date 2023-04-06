const scamsRoutes = require("./scams")

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send("Welcome to crypto scams server!")
    })

    scamsRoutes(app, fs)
};

module.exports = appRouter;