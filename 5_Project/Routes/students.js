const express = require('express')
const router = express.Router()
const {Student,validate} = require('../models/studentsModel')


router.get('/',async(req,res)=>{
    let students = await Student.find()
    res.send(students)
})

router.post('/',async(req,res)=>{

    //calling validator function
    const {error} = validate(req.body)
    if(error)  return res.status(400).send(error.details[0].message)
    
    //creating new document
    const student = new Student({
        name : req.body.name,
        isEnrolled : req.body.isEnrolled,
        Phone : req.body.Phone
    })
    await student.save()
    res.send(student)
})

router.put('/:id',async(req,res)=>{
    //calling validator function
    const {error} = validate(req.body)
    if(error)   return res.status(400).send(error.details[0].message)

    //updating document
    const student = await Student.findByIdAndUpdate(req.params.id,{name:req.body.name,Phone:req.body.Phone,isEnrolled:req.body.isEnrolled},{new:true});
    if(!student)   return res.status(404).send('The Student with the given ID was not found.')

    res.send(category)
})

router.delete('/:id',async(req,res)=>{
    const student = await Student.findByIdAndDelete(req.params.id);
    if(!student)   return res.status(404).send('The Student with the given ID was not found.')

    res.send(student)
})

router.get('/:id',async(req,res)=>{
    const student = await Student.findById(req.params.id)
    if(!student)   return req.status(404).send('The Student with the given ID was not found.')
    
    res.send(student)
})


module.exports = router