const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/Travelling_agency',function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log("mongodb connected")
// });


mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/Travelling_agency', { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.log("Connection errr: ", err);
})