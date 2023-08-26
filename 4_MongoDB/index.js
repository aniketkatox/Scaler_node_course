const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testDatabase')
.then(()=> console.log('Connection is Successful'))
.catch(err=> console.error('Could not connect to mongodb',err))

//Schema
const courseSchema = new mongoose.Schema({
    name : {type : String,required : true, minLength:5,maxLength:200},
    tags : {type : Array,validate : {   //custom data validator
        validator : function(tags){
            return tags.length > 1
        }
    }},
    category : {
        type : String,
        required : true,
        enum : ['DSA','web','Mobile','Data Science']
    },
    creator : {type : String,required : true},
    publishedDate : {type:Date,default:Date.now},
    isPublished : {type : String,required : true},
    rating : {type: Number,required : function(){return this.isPublished}}
})

//Model
const Course = mongoose.model('course',courseSchema)

//function for creating Dataset
async function createCourse(){
    const course = new Course({
        name : 'Monogoose',
        tags : ['express','mongodb'],
        category : "web",
        creator : 'Steve',
        isPublished : true,
        rating : 4.4
    });

    try {
        // await course.validate() //inbuilt function to do the same job as velow 2 lines
        const result = await course.save()  //asynchronous method
        console.log(result)
    } catch (error) {
        for(field in error.errors){
            console.log(error.errors[field])
        }
    }
}   //create

createCourse()

// Comparision query operators ->
// gt (greater than)
// gte (greater than and equal to)
// lt (less than)
// lte (less than and equal to)

// in   [3,4.3]
// notin

//Logical query operators ->
// and
// or


//Query
async function getCourses(){
    const courses = await Course.find({rating : {$in : [5,4.3,4,3]}}).select({name:1,publishedDate:1})
    .and([{creator:'Aniket'},{rating:2}])
    console.log(courses)
}   //read
//getCourses()

async function updateCourse(id){
    let course = await Course.findById(id)

    if(!course) return;

    course.name = 'Python'
    course.creator = 'Laxit'

    const updatedCourse = await course.save()
    console.log(updatedCourse)
}   //update
//updateCourse('64e72903715fa7a58d5e25c6')

async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)

    console.log(course)
}   //delete
//deleteCourse('64e728d8a8d6c30a77e68b42')