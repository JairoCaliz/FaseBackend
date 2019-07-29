const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const producto_multimediaSchema = new Schema({
    id: String,
    nombre: String,
    descripcion: String,
    fecha_creacion: String,

    id_usuario:{
        type:[Schema.Types.ObjectId],
        ref:"User"
    },

    id_grado:{
        type:[Schema.Types.ObjectId],
        ref:"Grados"
    }
})

var producto_multimedia = mongoose.model("User", producto_multimediaSchema);
module.exports = producto_multimedia;