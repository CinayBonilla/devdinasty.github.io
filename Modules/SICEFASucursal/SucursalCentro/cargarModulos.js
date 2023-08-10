let moduloClientes;
let moduloProductos;
function cargarModuloClientes(){
    fetch("../Clientes/clientesSucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorClientes").innerHTML = html;
                    import ("../Clientes/controllerClientes.js").then(
                            function(controller){
                                moduloClientes = controller;
                            }
                            );
                }
            );
}

let moduloEmpleados;

function cargarModuloEmpleados(){
    fetch("../Empleados/empleadosSucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorClientes").innerHTML = html;
                    import ("../Empleados/controllerEmpleados.js").then(
                            function(controller){
                                moduloEmpleados = controller;
                            }
                            );
                }
            );
}

function cargarModuloProductos(){
    fetch("../Productos2/productosSucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorClientes").innerHTML = html;
                    import ("../Productos2/controllerProductos2.js").then(
                            function(controller){
                                moduloProductos = controller;
                            }
                            );
                }
            );
}

let moduloPedidos;


function cargarModuloPedidos(){
    fetch("../Pedidos/pedidosSucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorClientes").innerHTML = html;
                    import ("../Pedidos/controllerPedidos.js").then(
                            function(controller){
                                moduloPedidos = controller;
                            }
                            );
                }
            );
} 

let moduloVentas;


function cargarModuloVentas(){
    fetch("../Ventas/ventasSucursal.html")
            .then(
                function(response){
                    return response.text();
                }
            )
            .then(
                function(html){
                    document.getElementById("contenedorClientes").innerHTML = html;
                    import ("../Ventas/controllerVentas.js").then(
                            function(controller){
                                moduloVentas = controller;
                            }
                            );
                }
            );
}


function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}