const mongoose=require('mongoose');
var mongoURL="mongodb+srv://ecommobails:mobail12@cluster0.iycnxpq.mongodb.net/test"

mongoose.connect(mongoURL,{useUnifiedTopology:true , useNewUrlParser:true});

var connection=mongoose.connection;

connection.on('error' , ()=>{
    console.log('Mongo DB connection failed')
})

connection.on('connected' , ()=>{
    console.log('Mongo DB connection successful')
})

module.exports=mongoose