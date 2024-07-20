import mongoose from "mongoose";

let { Schema , model } = mongoose;

const userSchema = new Schema({
    userName : {type : String ,  required : true },
    email : {type : String , required : true  , unique : true },
    password : {type : String , required : true , min : [6 , "Password is too Short"]},
    phoneNumber : {type : Number , min : [10 , "Number is not valid "] , max : [12 , "Number is not valid "]}
})

let User = model('User' , userSchema  );

export default User ;





