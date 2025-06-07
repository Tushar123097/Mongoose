//1>>what is mongoose 
//Monogoose is an odm (object Data Modeling) library for
//MongoDB and node-js
//1:Structure your MongoDB docements using Schemas
//2:Interact with MongoDB using familiar JavaScript
//3: method (.save(), .fing() , etc)
//2>> Installatio & Setup
//    IN  --  TERMINAL
//npm installation mongoose

//CONNECT TO MONGODB
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/deltaDB",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Error", err));

//SCHEMA

const userSchema = new mongoose.Schema({
  
    name: String,
    age: Number,
    email: String,
});

//used to create and manage documents.
//this will create a collecion named users in the database
//you use this user model to do CRUD operation

const User = mongoose.model("User", userSchema);

//Insert in Mongoose (Single Entry)

const user1 = new User({
    name: "Tushar",
    age: 20,
    email: "tushar@exmaple.com"
});

//INSERT Multiple Doucument
User.insertMany([
    {name: "Aman", age: 23, email: "aman@example.com"},
    {name: "Riya", age: 25, email: "riya@example.com"}
])
.then (res => console.log("Inserted:", res))
.catch(err => console.log("Error"))

//save it 
user1.save() 
.then(doc => console.log("saved", doc))
.catch(err => console.log("Error", err));

//FIND IN MONGOOSE
//Find All

// User.find() 
// .then(data => console.log(data))
// .catch(err => console.log(err));

//FIND ONE
User.findOne({  name: "Tushar"  })
  .then(data => console.log(data));

  //Update
  User.updateOne(
    { name: "Tushar"},//filter
    { $set: { age: 21 }}//update
  )
  .then(res => console.log(res))
  .catch(err => console.log(err));
  //UpdateMany()

  User.updateMany(
    { name: "Tushar" },//filer empty
    { $set: { age: 10} }
  )
  .then(res => console.log(res));

  //findOneAndUpdate()
  User.findOneAndUpdate(
    { name: "Aman" },
    { $set: {email: "aman@update.com"} },
    { new: true }
  )
  .then(data => console.log(data));

  //replaceone() like Riya
  User.replaceOne(
    { name: "Riya" },
    { name: "Riya Updated",
     age: 26,
    email: "riya@example.com" 
    }
)
    .then(res => console.log("Replace Result", res))
    .catch(err => console.log("Error", err));
  
