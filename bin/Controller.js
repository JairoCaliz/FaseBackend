const mongoose = require("mongoose");
const User = require("./models/User");

class Controller{
    constructor(){
        this.connect();
    }

   async connect(){
       try{
        await mongoose.connect(
            "mongodb+srv://jcalizhoyos:1069495296caliz@cluster0-ul61k.mongodb.net/projectDB?retryWrites=true&w=majority",
            {userNewUrlParser:true}
        );
        console.log("conectado a la base de datos")

       } catch(e){
           console.error(e)
       }
   }

   getUsers(res){
       User.find({}, (err, users)=>{
           if(err) throw err;

           res.send(users);
       })
   }
   postUsers(req, res){
       let user = req.body.users;
       User.create(user, (err, newUser)=>{
             if(err) throw err;
             res.send({nU:newUser})
       })
   }

}

exports.controller = new Controller()