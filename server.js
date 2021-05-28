const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const { Int32 } = require("bson");


app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://maulia-admin:maulia123a@cluster0.mfaui.mongodb.net/notesDB",{ useNewUrlParser: true }, { useUnifiedTopology: true } )

//buat data schema
const notesSchema = {
    Name: String, 
    Email: String,
    Telephone: String, 
    Option: String, 
    Text: String
}

const Note = mongoose.model("Note", notesSchema)


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newNote = new Note({
        Name: req.body.Name, 
        Email: req.body.Email, 
        Telephone: req.body.Telephone, 
        Option: req.body.Option, 
        Text: req.body.Text
    });
    newNote.save();
    res.redirect("/")
})


app.listen(5000, function(){
    console.log("Server running in port 5000")
})
