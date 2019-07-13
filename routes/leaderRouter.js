const express = require('express')
const bodyParser = require('body-parser')

const leaderRouter = express.Router()

leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end('Will send all leaders to you')
})
.post((req,res,next)=>{
    res.end('will add the leaders : '+req.body.name+ ' with details '+req.body.description)
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported')
})
.delete((req,res,next)=>{
    res.end('Deleting all the leaders')
})


leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end('Will send leader : '+req.params.leaderId+' to you')
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on : '+req.params.leaderId)
})
.put((req,res,next)=>{
    res.end('Updating leader : '+req.params.leaderId)
})
.delete((req,res,next)=>{
    res.end('Deleting leader: '+req.params.leaderId)
})

module.exports = leaderRouter;