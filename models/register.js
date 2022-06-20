const mongoose = require('mongoose');
//loginSchema
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    
    },
    password:{
        type:String,
        required:true
    }
   
    
    

});
//RegisterSchema
const registerSchema = new mongoose.Schema({
    email:
    {
        type: String,
        required: true,
        unique:true
    },
     college:{
        type:String,
        required:true
     }, 
    prn:{
        type:String,
        required:true
      } ,
    fullname:{
        type:String,
        required:true
      },
    password:{
        type:String,
        required:true
       },
    confirm_password:{
        type:String,
        required:true
       },
    phone:{
        type:Number,
        required:true,
        unique:true,
        maxlength:10
    }
});
//upload Book Schema
const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    
    },
    condition:{
        type:String,
        required:true
    },
    author:{
        type:String

    }
    
    

});
// module.exports = mongoose.model('newUser',registerSchema)
const register = mongoose.model("newuser",registerSchema);
const User = mongoose.model("user",userSchema);
const book = mongoose.model("book",bookSchema);
module.exports = {register,User,book}