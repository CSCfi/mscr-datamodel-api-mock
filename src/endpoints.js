const schema = require('./schema')
const crosswalk = require('./crosswalk')

module.exports = function (app) {

    app.put('/v2/schema', (req, res) => {
        /*  #swagger.tags = ['Schema']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(schema.add(true))
    })
    app.put('/v2/schema/:pid/upload', (req, res) => {
        /*  #swagger.tags = ['Schema']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(schema.upload(true))
    })    
    app.get('/v2/schema/original', (req, res) => {
        /*  #swagger.tags = ['Schema']
        */
        res.setHeader('Content-Type', 'text/turtle')
        return res.status(200).send(schema.getOriginal(true))
    })      
    app.get('/v2/schema/internal', (req, res) => {
        /*  #swagger.tags = ['Schema']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(schema.getInternal(true))
    })    
    app.get('/v2/schema/:pid', (req, res) => {
        /*  #swagger.tags = ['Schema']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(schema.get(true))
    })    
    app.post('/v2/schema/:pid', (req, res) => {
        /*  #swagger.tags = ['Schema']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(schema.add(true))
    })  

    /**** CROSSWALK */

    app.put('/v2/crosswalk', (req, res) => {
        /*  #swagger.tags = ['Crosswalk']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(crosswalk.add(true))
    })
    app.put('/v2/crosswalk/:pid/upload', (req, res) => {
        /*  #swagger.tags = ['Crosswalk']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(crosswalk.upload(true))
    })    
    app.get('/v2/crosswalk/original', (req, res) => {
        /*  #swagger.tags = ['Crosswalk']
        */
        res.setHeader('Content-Type', 'text/xml')
        return res.status(200).send(crosswalk.getOriginal(true))
    })      
    app.get('/v2/crosswalk/:pid', (req, res) => {
        /*  #swagger.tags = ['Crosswalk']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(crosswalk.get(true))
    })    
    app.post('/v2/crosswalk/:pid', (req, res) => {
        /*  #swagger.tags = ['Crosswalk']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(crosswalk.add(true))
    })  
}

