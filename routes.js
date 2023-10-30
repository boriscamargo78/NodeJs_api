var productoController = require("./api/controlador/productoController.js").productoController;

module.exports = function(app) {
    // CREATE --> 01 Api: Ingresar, guardar productos nuevos al array
    app.post("/producto/guardar", productoController.guardar);

    // READ --> 02 Api: Listar Productos
    app.get("/producto/listarTodos", productoController.listarTodos);

    // READ --> 03 Api: Listar por Codigo
    app.get("/producto/:codigo", productoController.obtenerProductoPorCodigo);

    // UPDATE --> 04 Api: Modificar Productos
    app.post("/producto/modificar", productoController.modificar);

    // DELETE --> 05 Api: Eliminar Productos
    app.post("/producto/eliminar", productoController.eliminar);
};