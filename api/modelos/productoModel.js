var productoModel = {}

var producto = [
    {
        codigo: 1,
        nombre: "Logitec",
        descripcion: "Mouse corriente",
        precio: 50000
    }, {
        codigo: 2,
        nombre: "Apple",
        descripcion: "Mouse para Mac",
        precio: 90000
    }, {
        codigo: 3,
        nombre: "DSFY",
        descripcion: "Mouse gamer",
        precio: 70000
    }
]

productoModel.guardar = function(post,callback){

    producto.push({ codigo: post.codigo, nombre: post.nombre, descripcion: post.descripcion, precio: post.precio})

    return callback({ state: true,mensaje: "Se ha guardado el producto" })

}

productoModel.listarTodos = function(post,callback) {
return callback(producto)
}

productoModel.obtenerProductoPorCodigo = function(codigo) {
    var productoEncontrado = producto.find(item => item.codigo == codigo);
    return productoEncontrado;
};


productoModel.modificar = function(post, callback) {
    var posicion = producto.findIndex ((item) => item.codigo == post.codigo )

    if(posicion == -1){
        callback({ state: false, mensaje:"Este codigo no se encuentra en la base de datos" })
        return false
    } else {
        producto[posicion].nombre = post.nombre
        producto[posicion].descripcion = post.descripcion
        producto[posicion].precio = post.precio
        callback({state:true, mensaje:"Tu producto fue actualizado"})
    }

}

productoModel.eliminar = function(post, callback) {
    var posicion = producto.findIndex ((item) => item.codigo == post.codigo )

    if (posicion == -1){
        callback({state:false, mensaje:"Producto inexistente, no se ha eliminado ningún item"})
        
    } else {
        producto.splice(posicion,1)
        callback({state:true,mensaje:"Producto eliminado del inventario"})

    }

}

module.exports.productoModel = productoModel;


