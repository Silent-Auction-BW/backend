const express = require('express')
const router = express.Router()

const db = require('../models/seller-model')


router.get("/sellers", async (req, res, next) =>{
    try{
        res.json(await db.getAll())
    }
    catch(err){
        next(err)
    }
})


router.get('/sellers/:id', async (req, res, next)=>{
    try{
        console.log(req.params.id)
        res.json(await db.getById(req.params.id))
    } catch(err){
        next(err)
    }
})



router.post("/sellers/:id/items", async (req, res, next) =>{
    console.log(req.body)
    const id = req.params.id
    try{
        res.json(await db.addItem(id, req.body))
    }
    catch(err){
        next(err)
    }
})

module.exports = router;