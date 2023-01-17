const mongoose  = require("mongoose");
  const UserSchema = mongoose.Schema({
         name:{type:String},
         email:{type:String , unique : true},
         username:{type:String, unique : true},
         password:{type:String},
         age:{type:Number},
         address:{type:String},
        City :{type: String}
  })
  const userMOdel =  mongoose.model("z_users", UserSchema)
  module.exports = userMOdel
