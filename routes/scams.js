const scamsRoutes = (app, fs) => {
    const dataPath = './data/scams.json'

    app.get('/scams', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err
            }

            res.send(JSON.parse(data))
        })
    })

    app.get('/scams/:id', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err
            }

            res.send(JSON.parse(data)[req.params.id])
        })
    })
}

module.exports = scamsRoutes