//Declaración de variales//
var express = require("express")
var app = express() //Para que se ejecute como funcionalidad//
var puerto = 3000 //Puerto escogido para la aplicación//

var producto = [
    {
        codigo: 000001,
        nombre: "Logitec",
        descripcion: "Mouse corriente",
        precio: 50000
    }, {
        codigo: 000002,
        nombre: "Apple",
        descripcion: "Mouse para Mac",
        precio: 90000
    }, {
        codigo: 000003,
        nombre: "DSFY",
        descripcion: "Mouse gamer",
        precio: 70000
    }
]

//Ingresar, guardar productos nuevos al array//
app.post("/producto/Guardar", function (request, response) {
    var codigo = request.body.codigo
    var nombre = request.body.nombre
    var descripcion = request.body.descripcion
    var precio = request
        .body
        .precio

    console.log(codigo)
    console.log(nombre)
    console.log(descripcion)
    console.log(precio)

    producto.push(
        {codigo: codigo, nombre: nombre, descripcion: descripcion, precio: precio}
    )
    //status de http//
    response
        .status(200)
        .json({producto})

})

//Api
/* app.get("/sumar/:numero1/:numero2", function(request,response) {

    var num1 = parseInt(request.params.numero1)
    var num2 = parseInt(request.params.numero2)
    response.json({ total: num1 + num2 })
})  */

//Listar Productos
app.get("/producto/CargarTodos", function(request, response) {
    response.json(producto)
})

//Listar por Codigo
app.get("/producto/:codigo", function(request, response){
    var codigo = request.params.codigo

    var posicion = producto.find((item) => (
        item.codigo == codigo))

    console.log(posicion)

    if (posicion == -1) {
        response.json({ state: false, mensaje: "El codigo de producto no es correcto" })
    }

    if (posicion == 0) {
        response.json({ state: true, mensaje: "Codigo existente" })
        
    }

    if (posicion == undefined) {
        response.json({ state: false, mensaje: "No se encontraron datos de producto" })
        
    }

})

//Va a escuchar a través del puerto//
app.listen(puerto, function () {
    console.log("Servidor funcionando por el puerto " + puerto)
})