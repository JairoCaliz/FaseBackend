const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriasSchema = new Schema({
    id: String,
    nombre: String
})

var categorias = mongoose.model("categorias", categoriasSchema);
module.exports = categorias;