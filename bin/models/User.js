const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: String,
    nombre: String,
    password: String,
    telefono: String,
    id_grado:{
        type:[Schema.Types.ObjectId],
        ref:""
    }
})

var User = mongoose.model("User", UserSchema);
module.exports = User;