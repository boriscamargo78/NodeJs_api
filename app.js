//Declaración de variales//
var express = require("express")
var app = express()
var puerto = 3000

var producto = [
    { codigo: 000001, nombre: "Logitec", descripcion: "Mouse corriente", precio: 50000},
    { codigo: 000002, nombre: "Apple", descripcion: "Mouse para Mac", precio: 90000},
    { codigo: 000003, nombre: "DSFY", descripcion: "Mouse gamer", precio: 70000},
]

//Ingresar productos nuevos al array//
app.post("/producto/Guardar", function(request,response){
    var codigo = request.body.codigo
    var nombre = request.body.nombre
    var descripcion = request.body.descripcion
    var precio = request.body.precio

    console.log(codigo)
    console.log(nombre)
    console.log(descripcion)
    console.log(precio)

    producto.push({codigo:codigo, nombre:nombre, descripcion:descripcion, precio:precio})
    //status de http//
    response.status(200).json({state:true,mensaje:"Producto guardado"}) 

})

app.get("")

app.listen(puerto, function(){
    console.log("Servidor funcionando por el puerto " + puerto)
})