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



router.delete("items/:id", async (req,res,next) =>{
    db.remove(req.params.id).then((item) =>{
        if(item){
            res.status(200).json(item)
        }else{
            res.status(400).json({message: "Items with that id does not exist"})
        }
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).json({
            message: "Error Database",
          });
    })
})

module.exports = router;