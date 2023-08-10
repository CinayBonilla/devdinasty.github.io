console.log("Hola desde js aaa");

let productos = [];
fetch("../Productos2/dataProductos2.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsonDatos) {
            productos = jsonDatos;
            console.log(productos);
            cargarTabla();
        }
        );

export function agregarProducto() {
    let nombre,
            nGenerico,
            fFarmaceutica,
            uMedida,
            presentacion,
            pIndicacion,
            contradicciones,
            concentracion,
            uEnvase,
            pUnitario,
            cBarras,
            estatus;

    nombre = document.getElementById("txtNombrePro").value;
    nGenerico = document.getElementById("txtNombreGenPro").value;
    fFarmaceutica = document.getElementById("txtFormaFar").value;
    uMedida = document.getElementById("txtUnidadMed").value;
    presentacion = document.getElementById("txtPresentacionPro").value;
    pIndicacion = document.getElementById("txtPrincipalInd").value;
    contradicciones = document.getElementById("txtContraPro").value;
    concentracion = document.getElementById("txtConcenPro").value;
    uEnvase = document.getElementById("txtUnidadEnv").value;
    pUnitario = document.getElementById("txtPrecioPro").value;
    cBarras = document.getElementById("txtCodPro").value;
    
    let producto = {};
    producto.nombre = nombre;
    producto.nGenerico = nGenerico;
    producto.fFarmaceutica = fFarmaceutica;
    producto.uMedida = uMedida;
    producto.presentacion = presentacion;
    producto.pIndicacion = pIndicacion;
    producto.contradicciones = contradicciones;
    producto.concentracion = concentracion;
    producto.uEnvase = uEnvase;
    producto.pUnitario = pUnitario;
    producto.cBarras = cBarras;
    productos.push(producto);
    limpiarCampos();
    cargarTabla();
}

export function cargarTabla(){
    let cuerpo = "";
    productos.forEach(function (producto){
        let registro = 
                '<tr onclick="moduloProductos.selectProducto(' + productos.indexOf(producto) +');">'+
                '<td>' + producto.nombre + '</td>' +
                '<td>' + producto.nGenerico + '</td>' +
                '<td>' + producto.fFarmaceutica + '</td>' +
                '<td>' + producto.uMedida + '</td>' +
                '<td>' + producto.presentacion + '</td>' +
                '<td>' + producto.pIndicacion + '</td>' +
                '<td>' + producto.contradicciones + '</td>' +
                '<td>' + producto.concentracion + '</td>' +
                '<td>' + producto.uEnvase + '</td>' +
                '<td>' + producto.pUnitario + '</td>' +
                '<td>' + producto.cBarras + '</td>' +
                '<td>' + producto.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;
}

let indexProductoSeleccionado;
export function selectProducto(index){
    document.getElementById("txtNombrePro").value = productos[index].nombre;
    document.getElementById("txtNombreGenPro").value = productos[index].nGenerico;
    document.getElementById("txtFormaFar").value = productos[index].fFarmaceutica;
    document.getElementById("txtUnidadMed").value = productos[index].uMedida;
    document.getElementById("txtPresentacionPro").value = productos[index].presentacion;
    document.getElementById("txtPrincipalInd").value = productos[index].pIndicacion;
    document.getElementById("txtContraPro").value = productos[index].contradicciones;
    document.getElementById("txtConcenPro").value = productos[index].concentracion;
    document.getElementById("txtUnidadEnv").value = productos[index].uEnvase;
    document.getElementById("txtPrecioPro").value = productos[index].pUnitario;
    document.getElementById("txtCodPro").value = productos[index].cBarras;
    
    document.getElementById("btnActualizar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    indexProductoSeleccionado = index;
}

export function limpiarCampos() {
    document.getElementById("txtNombrePro").value = "";
    document.getElementById("txtNombreGenPro").value = "";
    document.getElementById("txtFormaFar").value ="" ;
    document.getElementById("txtUnidadMed").value = "";
    document.getElementById("txtPresentacionPro").value = "";
    document.getElementById("txtPrincipalInd").value = "";
    document.getElementById("txtContraPro").value ="" ;
    document.getElementById("txtConcenPro").value = "";
    document.getElementById("txtUnidadEnv").value = "";
    document.getElementById("txtPrecioPro").value = "";
    document.getElementById("txtCodPro").value = "";
    
    document.getElementById("txtNombrePro").focus();
    document.getElementById("btnActualizar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexProductoSeleccionado = 0; 
}

export function actualizarProducto() {
    let nombre,
            nGenerico,
            fFarmaceutica,
            uMedida,
            presentacion,
            pIndicacion,
            contradicciones,
            concentracion,
            uEnvase,
            pUnitario,
            cBarras,
            estatus;
    
    
    nombre = document.getElementById("txtNombrePro").value;
    nGenerico = document.getElementById("txtNombreGenPro").value;
    fFarmaceutica = document.getElementById("txtFormaFar").value;
    uMedida = document.getElementById("txtUnidadMed").value;
    presentacion = document.getElementById("txtPresentacionPro").value;
    pIndicacion = document.getElementById("txtPrincipalInd").value;
    contradicciones = document.getElementById("txtContraPro").value;
    concentracion = document.getElementById("txtConcenPro").value;
    uEnvase = document.getElementById("txtUnidadEnv").value;
    pUnitario = document.getElementById("txtPrecioPro").value;
    cBarras = document.getElementById("txtCodPro").value;
    
    let producto = {};
    producto.nombre = nombre;
    producto.nGenerico = nGenerico;
    producto.fFarmaceutica = fFarmaceutica;
    producto.uMedida = uMedida;
    producto.presentacion = presentacion;
    producto.pIndicacion = pIndicacion;
    producto.contradicciones = contradicciones;
    producto.concentracion = concentracion;
    producto.uEnvase = uEnvase;
    producto.pUnitario = pUnitario;
    producto.cBarras = cBarras;
    producto.estatus = "Activo";
    productos[indexProductoSeleccionado] = producto;
    limpiarCampos();
    cargarTabla();
}

export function eliminarProducto(){
    productos[indexProductoSeleccionado].estatus = "Inactivo";
    limpiarCampos();
    cargarTabla();
}








