
const loadData = require('./loadData')
let expression = true


module.exports = function (app) {

    app.get('/countries/loadCities', async (req, res) => {
        res.setHeader('Content-Type', 'application/json')        
        const dataObj = await loadData.loadCities()
        if (expression)
            {
                return res.status(200).send(dataObj)
            }
        return res.status(404).send(false)
    })    
} 
