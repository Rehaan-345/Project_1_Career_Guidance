const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://career_guidance:1357924680@career-guidance.abqbvqk.mongodb.net/project_1?retryWrites=true&w=majority").then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log('no connection'+e);
})


