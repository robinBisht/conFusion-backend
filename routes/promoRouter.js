const express = require('express')
const bodyParser = require('body-parser')

const promoRouter = express.Router()

promoRouter.use(bodyParser.json())

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end('Will send all promotions to you')
})
.post((req,res,next)=>{
    res.end('will add the promotion : '+req.body.name+ ' with details '+req.body.description)
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported')
})
.delete((req,res,next)=>{
    res.end('Deleting all the promotions')
})


promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end('Will send : '+req.params.promoId+' to you')
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on : '+req.params.promoId)
})
.put((req,res,next)=>{
    res.end('Updating promotion : '+req.params.promoId)
})
.delete((req,res,next)=>{
    res.end('Deleting promotion: '+req.params.promoId)
})

module.exports = promoRouter;