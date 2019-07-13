const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end('Will send all dishes to you')
})
.post((req,res,next)=>{
    res.end('will add the dish : '+req.body.name+ ' woth details '+req.body.description)
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported')
})
.delete((req,res,next)=>{
    res.end('Deleting all the dishes')
})


dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end('Will send : '+req.params.dishId+' to you')
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on : '+req.params.dishId)
})
.put((req,res,next)=>{
    res.end('Updating dish : '+req.params.dishId)
})
.delete((req,res,next)=>{
    res.end('Deleting dish: '+req.params.dishId)
})

module.exports = dishRouter;