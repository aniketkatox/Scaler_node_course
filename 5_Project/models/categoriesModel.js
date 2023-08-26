const Joi = require('joi')
const mongoose = require('mongoose')

//Schema
const categorySchema = new mongoose.Schema({
    name : {type:String , required:true,minLength : 3,maxLenght : 30}
})

//Model
const Category = mongoose.model('Category',categorySchema)

// Joi validator
function validateData(category) {
    const schema = Joi.object({
      name: Joi.string().min(3).required()
    });
  
    return schema.validate(category);
}

exports.Category = Category
exports.categorySchema = categorySchema
exports.validate = validateData