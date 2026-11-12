const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({

    title : String,
    description : String,

})

// dob : Date   age: Number


const noteModel = mongoose.model("note" , noteSchema)

// noteModel is created to CRUD operations easily without much code


module.exports = noteModel;