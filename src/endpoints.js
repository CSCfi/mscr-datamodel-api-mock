const frontend = require('./frontend')
const schema = require('./schema')
const crosswalk = require('./crosswalk')
const admin = require('./admin')
const user = require('./user')

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

    /**** FRONTEND */
    app.get('/v2/frontend/searchModels', (req, res) => {
        /*  #swagger.tags = ['Crosswalk']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(frontend.searchModels(true))
    })   
    app.get('/v2/frontend/organizations', (req, res) => {
        /*  #swagger.tags = ['Crosswalk']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(frontend.organizations(true))
    })    
    
    /*** ADMIN */
    app.get('/v2/fakeableUsers', (req, res) => {
        /*  #swagger.tags = ['Crosswalk']
        */
        res.setHeader('Content-Type', 'application/json')
        return res.status(200).send(admin.fakeableUsers(true))
    })   
    

    /*** USER */
    app.get('/v2/user', (req, res) => {
        const options = {            
            expires: new Date(Date.now() + 900000),
            httpOnly: true, // The cookie only accessible by the web server            
            domain: 'localhost',
            path: '/'

        }
        res.cookie('JSESSIONID', 'test'. options)
            
        res.status(200).send(user.user(true))
    })

}

