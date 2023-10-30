//Declaración de variales//
var express = require("express")
global.app = express() //Para que se ejecute como funcionalidad//
var puerto = 3000 //Puerto escogido para la aplicación//
// Importar el módulo body-parser para parsear el cuerpo de la solicitud
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // Usar body-parser para parsear el cuerpo de las solicitudes JSON
app.use(bodyParser.urlencoded({extended:true}))

var routes = require("./routes.js")(app);


//MODELO VISTA CONTROLADOR - APIs

//CREATE --> 01 Api: Ingresar, guardar productos nuevos al array//
app.post("/producto/guardar", function (request, response) {
   
})

//READ --> 02 Api: Listar
app.get("/producto/listarTodos", function (request, response) {
})

//READ --> 03 Api: Listar por Codigo
app.get("/producto/:codigo", function (request, response) {
})

//UPDATE --> 04 Api: Modificar Productos
app.post("/producto/modificar", function (request, response) {    
})

//DELETE --> 05 Api: Eliminar Productos
app.post("/producto/eliminar", function (request, response) {


})

//Va a escuchar a través del puerto//
app.listen(puerto, function () {
    console.log("Servidor funcionando por el puerto " + puerto)
})