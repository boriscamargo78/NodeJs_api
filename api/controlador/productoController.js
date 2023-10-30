//El controlador es el encargado de validar

var productoModel = require("../modelos/productoModel.js").productoModel
var productoController = {}

productoController.guardar = function(request, response){

        try {     
            var post = {
                codigo:request.body.codigo,
                nombre:request.body.nombre,
                descripcion:request.body.descripcion,
                precio:request.body.precio
            }

            if (post.codigo == undefined || post.codigo == null || post.codigo == "") {
                response.json({ state: false, mensaje:"Este campo es obligatorio" })
                return false
            }

            if (post.nombre == undefined || post.nombre == null || post.nombre == "") {
                response.json({ state: false, mensaje:"Este campo es obligatorio" })
                return false
            }

            if (post.descripcion == undefined || post.descripcion == null || post.descripcion == "") {
                response.json({ state: false, mensaje:"Este campo es obligatorio" })
                return false
            }

            if (post.precio == undefined || post.precio == null || post.precio == "") {
                response.json({ state: false, mensaje:"Este campo es obligatorio" })
                return false
            }

   productoModel.guardar(post,function(respuesta){
    response.json(respuesta)
   })

    } catch (error) {
        console.error(error);
        response.json({sate:false, mensaje:"error inesperado", error: error})
    }

}

productoController.listarTodos = function(request, response) {
    productoModel.listarTodos(null,function(respuesta){
        response.json(respuesta)
    })


}

productoController.codigo = function(request, response) {

    var codigo = request.params.codigo

    var posicion = producto.findIndex((item) => (item.codigo == codigo))

    if (posicion !== -1) {
        response.json({state: true, mensaje: "Producto encontrado"})
    }

    else {
        response.json({state: false, mensaje: "Codigo existente"});

    }
 
} 


productoController.modificar = function(request, response) {
    
    var post = {
        codigo: request.body.codigo,
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        precio: request.body.precio
    };

    if (post.codigo == undefined || post.codigo == null || post.codigo == "") {
    response.json({ state: false, mensaje:"Este campo es obligatorio" })
    return false
    }

    if (post.nombre == undefined || post.nombre == null || post.nombre == "") {
        response.json({ state: false, mensaje:"Este campo es obligatorio" })
        return false
    }

    if (post.descripcion == undefined || post.descripcion == null || post.descripcion == "") {
        response.json({ state: false, mensaje:"Este campo es obligatorio" })
        return false
    }

     if (post.precio == undefined || post.precio == null || post.precio == "") {
        response.json({ state: false, mensaje:"Este campo es obligatorio" })
        return false
    }

    productoModel.modificar(post,function(respuesta) {
        response.json(respuesta)
    })

    
}

productoController.eliminar = function(request, response) {

    var post = {
        codigo:request.body.codigo
    }

    
    if (codigo == undefined || codigo == null || codigo == "") {
        response.json({ state: false, mensaje:"Este campo es obligatorio" })
        return false
    }

    productoModel.eliminar(post,function(respuesta) {
        response.json(respuesta)        
    })    

}

module.exports.productoController = productoController

