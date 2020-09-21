const express = require('express')
const router = express.Router()
const db = require('../models/items-model')

router.get("/items", async (req, res, next) =>{
    try{
        res.json(await db.getAll())
    }
    catch(err){
        next(err)
    }
})

module.exports = router;