var productoController = require("./api/controlador/productoController.js").productoController

//CREATE --> 01 Api: Ingresar, guardar productos nuevos al array//
app.post("/producto/guardar", function (request, response) {
    productoController.guardar(request, response)

})

//READ --> 02 Api: Listar Productos
app.post("/producto/listarTodos", function (request, response) {
    productoController.listarTodos(request, response)

})

//READ --> 03 Api: Listar por Codigo
app.post("/producto/:codigo", function (request, response) {
  
})

//UPDATE --> 04 Api: Modificar Productos
app.post("/producto/modificar", function (request, response) {
    productoController.modificar(request, response)

})

//DELETE --> 05 Api: Eliminar Productos
app.post("/producto/eliminar", function (request, response) {
    productoController.eliminar(request, response)
 
})

