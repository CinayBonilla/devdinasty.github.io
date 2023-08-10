
let productos = [];
fetch("../Productos/dataProducto.json")
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

    let    nomPro,
            genPro,
            formaFar,
            unidadMed,
            presentacionPro,
            princInd,
            contra,
            concentra,
            uniEnva,
            precio,
            codigo,
            foto;

    nomPro = document.getElementById("txtNombrePro").value;
    genPro = document.getElementById("txtNombreGenPro").value;
    formaFar = document.getElementById("txtFormaFar").value;
    unidadMed = document.getElementById("txtUnidadMed").value;
    presentacionPro = document.getElementById("txtPresentacionPro").value;
    princInd = document.getElementById("txtPrincipalInd").value;
    contra = document.getElementById("txtContradicciones").value;
    concentra = document.getElementById("txtConcentracion").value;
    uniEnva = document.getElementById("txtUnidadesEnv").value;
    precio = document.getElementById("txtPrecioUni").value;
    codigo = document.getElementById("txtCodigoBar").value;
    foto = document.getElementById("txtFotoPro").value;


    let producto = {};
    producto.nomPro = nomPro;
    producto.genPro = genPro;
    producto.formaFar = formaFar;
    producto.unidadMed = unidadMed;
    producto.presentacionPro = presentacionPro;
    producto.princInd = princInd;
    producto.contra = contra;
    producto.concentra = concentra;
    producto.uniEnva = uniEnva;
    producto.precio = precio;
    producto.codigo = codigo;
    producto.foto = foto;

    productos.push(producto);
    limpiarCamposPro();
    cargarTabla();
}

export function cargarTabla() {
    let cuerpo = "";
    productos.forEach(function (producto) {
        let registro =
                '<tr onclick="moduloProducto.selectproducto(' + productos.indexOf(producto) + ');">' +
                '<td>' + producto.nomPro + '</td>' +
                '<td>' + producto.genPro + '</td>' +
                '<td>' + producto.formaFar + '</td>' +
                '<td>' + producto.unidadMed + '</td>' +
                '<td>' + producto.presentacionPro + '</td>' +
                '<td>' + producto.princInd + '</td>' +
                '<td>' + producto.contra + '</td>' +
                '<td>' + producto.concentra + '</td>' +
                '<td>' + producto.uniEnva + '</td>' +
                '<td>' + producto.precio + '</td>' +
                '<td>' + producto.codigo + '</td>' +
                '<td>' + producto.estatus + '</td>' +
                '<td>' + producto.foto + '</td>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;
}

let indexProductoSeleccionado;
export function selectproducto(index) {
    document.getElementById("txtNombrePro").value = productos[index].nomPro;
    document.getElementById("txtNombreGenPro").value = productos[index].genPro;
    document.getElementById("txtFormaFar").value = productos[index].formaFar;
    document.getElementById("txtUnidadMed").value = productos[index].unidadMed;
    document.getElementById("txtPresentacionPro").value = productos[index].presentacionPro;
    document.getElementById("txtPrincipalInd").value = productos[index].princInd;
    document.getElementById("txtContradicciones").value = productos[index].contra;
    document.getElementById("txtConcentracion").value = productos[index].concentra;
    document.getElementById("txtUnidadesEnv").value = productos[index].uniEnva;
    document.getElementById("txtPrecioUni").value = productos[index].precio;
    document.getElementById("txtCodigoBar").value = productos[index].codigo;

    document.getElementById("btnActualizarPro").classList.remove("disabled");
    document.getElementById("btnEliminarPro").classList.remove("disabled");
    document.getElementById("btnAgregarPro").classList.add("disabled");


    indexProductoSeleccionado = index;
}

export function limpiarCamposPro() {
    document.getElementById("txtNombrePro").value = "";

    document.getElementById("txtNombreGenPro").value = "";
    document.getElementById("txtFormaFar").value = "";
    document.getElementById("txtUnidadMed").value = "";
    document.getElementById("txtPresentacionPro").value = "";
    document.getElementById("txtPrincipalInd").value = "";
    document.getElementById("txtContradicciones").value = "";
    document.getElementById("txtConcentracion").value = "";
    document.getElementById("txtUnidadesEnv").value = "";
    document.getElementById("txtPrecioUni").value = "";
    document.getElementById("txtCodigoBar").value = "";
    document.getElementById("txtFotoPro").value = "";


    document.getElementById("txtNombreGenPro").focus();
    document.getElementById("btnActualizarPro").classList.add("disabled");
    document.getElementById("btnEliminarPro").classList.add("disabled");
    document.getElementById("btnAgregarPro").classList.remove("disabled");
    indexProductoSeleccionado = 0;
}

export function actualizarProducto() {
    let    nomPro,
            genPro,
            formaFar,
            unidadMed,
            presentacionPro,
            princInd,
            contra,
            concentra,
            uniEnva,
            precio,
            codigo,
            foto,
            estatus;

    nomPro = document.getElementById("txtNombrePro").value;
    genPro = document.getElementById("txtNombreGenPro").value;
    formaFar = document.getElementById("txtFormaFar").value;
    unidadMed = document.getElementById("txtUnidadMed").value;
    presentacionPro = document.getElementById("txtPresentacionPro").value;
    princInd = document.getElementById("txtPrincipalInd").value;
    contra = document.getElementById("txtContradicciones").value;
    concentra = document.getElementById("txtConcentracion").value;
    uniEnva = document.getElementById("txtUnidadesEnv").value;
    precio = document.getElementById("txtPrecioUni").value;
    codigo = document.getElementById("txtCodigoBar").value;
    foto = document.getElementById("txtFotoPro").value;

    let producto = {};
    producto.nomPro = nomPro;
    producto.genPro = genPro;
    producto.formaFar = formaFar;
    producto.unidadMed = unidadMed;
    producto.presentacionPro = presentacionPro;
    producto.princInd = princInd;
    producto.contra = contra;
    producto.concentra = concentra;
    producto.uniEnva = uniEnva;
    producto.precio = precio;
    producto.codigo = codigo;
    producto.foto = foto,
    producto.estatus = "Activo";
    
    productos[indexProductoSeleccionado] = producto;
    limpiarCamposPro();
    cargarTabla();
}

export function eliminarProducto() {
    productos[indexProductoSeleccionado].estatus = "Inactivo";
    limpiarCamposPro();
    cargarTabla();
}

export function buscarProducto() {
    Swal.fire({
                                      title: '¡Hola!',
                    text: 'Aqui esta lo que buscas',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                });
    console.log(productos);
    let filtro = document.getElementById("txtBuscarProducto").value.toString().toLowerCase();
    let resultados = productos.filter(element => {
        console.log(element.nomPro.toString().toLowerCase())
        console.log(filtro)
        if (filtro == element.nomPro.toString().toLowerCase()) {
            console.log("si esta")
            return element.nomPro.toString().toLowerCase() == filtro

        }
    });
    let cuerpo = "";
    console.log(resultados);
    resultados.forEach(function (producto) {
        console.log(producto);
                let registro =
                '<tr onclick="moduloProducto.selectproducto(' + productos.indexOf(producto) + ');">' +
                '<td>' + producto.nomPro + '</td>' +
                '<td>' + producto.genPro + '</td>' +
                '<td>' + producto.formaFar + '</td>' +
                '<td>' + producto.unidadMed + '</td>' +
                '<td>' + producto.presentacionPro + '</td>' +
                '<td>' + producto.princInd + '</td>' +
                '<td>' + producto.contra + '</td>' +
                '<td>' + producto.concentra + '</td>' +
                '<td>' + producto.uniEnva + '</td>' +
                '<td>' + producto.precio + '</td>' +
                '<td>' + producto.codigo + '</td>' +
                '<td>' + producto.estatus + '</td>' +
                '<td>' + producto.foto + '</td>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;
}

