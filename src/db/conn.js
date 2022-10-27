const mongoose = require('mongoose')

mongoose.connect("https://github.com/Rehaan-345/Project_1_Career_Guidance/blob/main/src/db").then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log('no connection'+e);
})


