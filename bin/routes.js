const express = require("express");
const app = express();
const {controller} = require("./Controller");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res )=>{
    res.send("Hola Mundo!");
})

app.get("/users", (req, res)=>{
    controller.getUsers(res);
})
app.post("/users", (req, res)=>{
    controller.postUsers(req, res)
})

app.get("/grados", (req, res)=>{
    controller.getGrados(res);
})
app.post("/grados", (req, res)=>{
    controller.postGrados(req, res)
})

app.get("/productos_multimedia/usuarios/:nombre_grado/", (req, res)=>{
    var nombre_grado = req.params.nombre_grado;
    console.log(nombre_grado)
    res.send("ok")
    //controller.postUsers(req, res)
})

app.get("/usuarios/:id_usuarios/productos_multimedia/", (req, res)=>{
    var id_usuarios = req.params.id_usuarios;
    console.log(id_usuarios)
    res.send("Listo ps")
    //controller.postUsers(req, res)
})

app.get("/productos_multimedia/usuarios/grado/:nombre_grado/categorias/:nombre_categoria/", (req, res)=>{
    var nombre_grado = req.params.nombre_grado;
    var nombre_categoria = req.params.nombre_categoria;
    console.log(nombre_grado)
    console.log(nombre_categoria)
    res.send("Está hecho.")
    //controller.postUsers(req, res)
})

app.get("/productos_multimedia/:id_producto/usuarios/:nombre_usuario/", (req, res)=>{
    var id_producto = req.params.id_producto;
    var nombre_usuario = req.params.nombre_usuario;
    console.log(id_producto)
    console.log(nombre_usuario)
    res.send("Está hecho x2")
    //controller.postUsers(req, res)
})

app.get("/grados/:nombre_grado/productos_multimedia/:fecha_creacion/", (req, res)=>{
    var nombre_grado = req.params.nombre_grado;
    var fecha_creacion = req.params.fecha_creacion;
    console.log(nombre_grado)
    console.log(fecha_creacion)
    res.send("Está hecho x3")
    //controller.postUsers(req, res)
})

exports.app = app;