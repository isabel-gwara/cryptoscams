const scamsRoutes = require("./scams")

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        content = `
        <h1>Crypto Scams from CryptoScamDB</h1>
        <p>This server uses open source data from the CryptoScamDB to serve data about individual scams.</p>
        
        <h1>Routes</h1>
        
        <ul>
            <li> /scams returns all scams from the CryptoScamDB blacklist </li>
            <li> /scams/:id returns the information from a single scam with the corresponding position in the list of scams </li>
        </ul>
        
        `
        res.send(content)
    })

    scamsRoutes(app, fs)
};

module.exports = appRouter;