const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GradosSchema = new Schema({
    id: String,
    nombre: String
})

var Grados = mongoose.model("Grados", GradoSchema);
module.exports = Grados;