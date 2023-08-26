const Joi = require('joi')
const mongoose = require('mongoose')

//Schema
const studentSchema = new mongoose.Schema({
    name : {type:String , required:true,minLength : 3,maxLenght : 30},
    isEnrolled : {
        type : Boolean,
        default : false
    },
    Phone : {
        type : String,
        required : true,
        minLength : 10,
        maxLenght : 25
    }
})

//Model
const Student = mongoose.model('Student',studentSchema)

// Joi validator
function validateData(category) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      Phone: Joi.string().min(10).max(50).required(),
      isEnrolled : Joi.boolean()
    });
  
    return schema.validate(student);
}

exports.Student = Student
exports.validate = validateData