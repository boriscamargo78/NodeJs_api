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

productoController.obtenerProductoPorCodigo = function(request, response) {
    var codigo = parseInt(request.params.codigo);
    var productoEncontrado = productoModel.obtenerProductoPorCodigo(codigo);

    if (productoEncontrado) {
        response.json({ state: true, mensaje: "Producto encontrado", producto: productoEncontrado });
    } else {
        response.json({ state: false, mensaje: "Producto no encontrado" });
    }
};


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
    };

    
    if (post.codigo == undefined || post.codigo == null || post.codigo == "") {
        response.json({ state: false, mensaje:"Este campo es obligatorio" });
        return;
    }

    productoModel.eliminar(post,function(respuesta) {
        response.json(respuesta);        
    })    

}

module.exports.productoController = productoController;

