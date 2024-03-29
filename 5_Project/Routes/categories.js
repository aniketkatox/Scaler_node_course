const express = require('express')
const router = express.Router()
const {Category,validate} = require('../models/categoriesModel')


router.get('/',async(req,res)=>{
    let categories = await Category.find()
    res.send(categories)
})

router.post('/',async(req,res)=>{

    //calling validator function
    const {error} = validate(req.body)
    if(error)  return res.status(400).send(error.details[0].message)
    
    //creating new document
    const category = new Category({
        name : req.body.name
    })
    await category.save()
    res.send(category)
})

router.put('/:id',async(req,res)=>{
    //calling validator function
    const {error} = validate(req.body)
    if(error)   return res.status(400).send(error.details[0].message)

    //updating document
    const category = await Category.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true});
    if(!category)   return res.status(404).send('The category with the given ID was not found.')

    res.send(category)
})

router.delete('/:id',async(req,res)=>{
    const category = await Category.findByIdAndDelete(req.params.id);
    if(!category)   return res.status(404).send('The category with the given ID was not found.')

    res.send(category)
})

router.get('/:id',async(req,res)=>{
    const category = await Category.findById(req.params.id)
    if(!category)   return req.status(404).send('The Category with the given ID was not found.')
    
    res.send(category)
})




module.exports = router