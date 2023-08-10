let moduloSucursales;

function cargarModuloSucursales(){
    fetch("GSucursales/sucursales.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorCentral").innerHTML = html;
                    import ("./GSucursales/controllerSucursales.js").then(
                            function(controller){
                                moduloSucursales = controller;
                            }
                            );
                }
            );
} 
let moduloProducto;

function cargarModuloProducto(){
    fetch("Pedidos/productosSucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorCentral").innerHTML = html;
                    import ("../Pedidos/controllerproducto.js").then(
                            function(controller){
                                moduloProducto = controller;
                            }
                            );
                }
            );
}