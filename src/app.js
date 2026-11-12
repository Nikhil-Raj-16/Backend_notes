const express = require('express');
const noteModel = require('./models/note.model.js')


const app = express();
app.use(express.json());
// note = {title, description}
/*
POST   /notes     => Create a note
GET    /notes     => Get all notes
DELETE /notes/:id => Delete a note
PATCH  /notes/:id => Update a note
*/

app.post("/notes", async (req, res) => {
    try {
        const { title, description } = req.body;
        const note = await noteModel.create({ title, description });

        res.status(201).json({
            message: "Note Created Successfully",
            note
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create note", error: error.message });
    }
});

app.get("/notes", async (req, res) => {

    const notes = await noteModel.find()   // find always returns a []

    // const notes = await noteModel.find({
    //     title : "test_title_1"
    // })   // find always returns a [] if no condition matches then it returns a [] i.e empty array

    // findone finds based on condition and returns an object not array, but if there are no notes with that condition then it gives null

    // const notes = await noteModel.findOne({
    //     title : "test_title_1"
    // })
    res.status(200).json({
        message : "Notes Fetched Successfully",
        notes : notes
    })

});

// so find gives either array of objects or an empty array  - [{}, {}, {}] or []
// but, findone gives either the object with that condition or null if not fulfill the condition- {} or null

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message : "Note deleted Successfully"
    })
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id

    const description = req.body.description

    await noteModel.findOneAndUpdate({
        _id : id
    }, { description : description })


    res.status(200).json({
        message : "Note updated successfully"
    })
})


module.exports = app
