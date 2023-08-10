console.log("Hola desde js aaa");

let empleados = [];
fetch("../Empleados/dataEmpleados.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsonDatos) {
            empleados = jsonDatos;
            console.log(empleados);
            cargarTabla();
        }
        );

export function agregarEmpleado() {
    let nombre,
            apePa,
            apeMa,
            genero,
            fNacimiento,
            rfc,
            curp,
            ciudad,
            estado,
            telefono,
            domicilio,
            cPostal,
            fIngreso,
            puesto,
            sMensual,
            email,
            codEmpleado,
            estatus;

    nombre = document.getElementById("txtNombreEmp").value;
    apePa = document.getElementById("txtApePEmp").value;
    apeMa = document.getElementById("txtApeMEmp").value;
    genero = document.getElementById("txtGenero").value;
    fNacimiento = document.getElementById("txtFechaNacEmp").value;
    rfc = document.getElementById("txtRFCEmp").value;
    curp = document.getElementById("txtCURPEmp").value;
    ciudad = document.getElementById("txtCiudadEmp").value;
    estado = document.getElementById("txtEstadoEmp").value;
    telefono = document.getElementById("txtTelEmp").value;
    domicilio = document.getElementById("txtDomEmp").value;
    cPostal = document.getElementById("txtCPEmp").value;
    fIngreso = document.getElementById("txtFechaIng").value;
    puesto = document.getElementById("txtPuestoEmp").value;
    sMensual = document.getElementById("txtSueldoEmp").value;
    email = document.getElementById("txtEmailEmp").value;
    codEmpleado = document.getElementById("txtCodEmp").value;
    
    let empleado = {};
    empleado.nombre = nombre;
    empleado.apePa = apePa;
    empleado.apeMa = apeMa;
    empleado.genero = genero;
    empleado.fNacimiento = fNacimiento;
    empleado.rfc = rfc;
    empleado.curp = curp;
    empleado.ciudad = ciudad;
    empleado.estado = estado;
    empleado.telefono = telefono;
    empleado.domicilio = domicilio;
    empleado.cPostal = cPostal;
    empleado.fIngreso = fIngreso;
    empleado.puesto = puesto;
    empleado.sMensual = sMensual;
    empleado.email = email;
    empleado.codEmpleado = codEmpleado;
    empleado.estatus = "Activo";
    empleados.push(empleado);
    limpiarCampos();
    cargarTabla();
}

export function cargarTabla(){
    let cuerpo = "";
    empleados.forEach(function (empleado){
        let registro = 
                '<tr onclick="moduloEmpleados.selectEmpleado(' + empleados.indexOf(empleado) +');">'+
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apePa + '</td>' +
                '<td>' + empleado.apeMa + '</td>' +
                '<td>' + empleado.genero + '</td>' +
                '<td>' + empleado.fNacimiento + '</td>' +
                '<td>' + empleado.rfc + '</td>' +
                '<td>' + empleado.curp + '</td>' +
                '<td>' + empleado.ciudad + '</td>' +
                '<td>' + empleado.estado + '</td>' +
                '<td>' + empleado.telefono + '</td>' +
                '<td>' + empleado.domicilio + '</td>' +
                '<td>' + empleado.cPostal + '</td>' +
                '<td>' + empleado.fIngreso + '</td>' +
                '<td>' + empleado.puesto + '</td>' +
                '<td>' + empleado.sMensual + '</td>' +
                '<td>' + empleado.email + '</td>' +
                '<td>' + empleado.codEmpleado + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblEmpleados").innerHTML = cuerpo;
}

let indexEmpleadoSeleccionado;
export function selectEmpleado(index){
    document.getElementById("txtNombreEmp").value = empleados[index].nombre;
    document.getElementById("txtApePEmp").value = empleados[index].apePa;
    document.getElementById("txtApeMEmp").value = empleados[index].apeMa;
    document.getElementById("txtGenero").value = empleados[index].genero;
    document.getElementById("txtFechaNacEmp").value = empleados[index].fNacimiento;
    document.getElementById("txtRFCEmp").value = empleados[index].rfc;
    document.getElementById("txtCURPEmp").value = empleados[index].curp;
    document.getElementById("txtCiudadEmp").value = empleados[index].ciudad;
    document.getElementById("txtEstadoEmp").value = empleados[index].estado;
    document.getElementById("txtTelEmp").value = empleados[index].telefono;
    document.getElementById("txtDomEmp").value = empleados[index].domicilio;
    document.getElementById("txtCPEmp").value = empleados[index].cPostal;
    document.getElementById("txtFechaIng").value = empleados[index].fIngreso;
    document.getElementById("txtPuestoEmp").value = empleados[index].puesto;
    document.getElementById("txtSueldoEmp").value = empleados[index].sMensual;
    document.getElementById("txtEmailEmp").value = empleados[index].email;
    document.getElementById("txtCodEmp").value = empleados[index].codEmpleado;
    
    document.getElementById("btnActualizar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");


    indexEmpleadoSeleccionado = index;
}

export function limpiarCampos() {
    document.getElementById("txtNombreEmp").value = "";
    document.getElementById("txtApePEmp").value = "";
    document.getElementById("txtApeMEmp").value ="" ;
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtFechaNacEmp").value = "";
    document.getElementById("txtRFCEmp").value = "";
    document.getElementById("txtCURPEmp").value ="" ;
    document.getElementById("txtCiudadEmp").value = "";
    document.getElementById("txtEstadoEmp").value = "";
    document.getElementById("txtTelEmp").value = "";
    document.getElementById("txtDomEmp").value = "";
    document.getElementById("txtCPEmp").value = "";
    document.getElementById("txtFechaIng").value = "";
    document.getElementById("txtPuestoEmp").value = "";
    document.getElementById("txtSueldoEmp").value = "";
    document.getElementById("txtEmailEmp").value = "";
    document.getElementById("txtCodEmp").value = "";
    
    document.getElementById("txtNombreEmp").focus();
    document.getElementById("btnActualizar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexEmpleadoSeleccionado = 0; 
}

export function actualizarEmpleado() {
    let nombre,
            apePa,
            apeMa,
            genero,
            fNacimiento,
            rfc,
            curp,
            ciudad,
            estado,
            telefono,
            domicilio,
            cPostal,
            fIngreso,
            puesto,
            sMensual,
            email,
            codEmpleado,
            estatus;
    
    nombre = document.getElementById("txtNombreEmp").value;
    apePa = document.getElementById("txtApePEmp").value;
    apeMa = document.getElementById("txtApeMEmp").value;
    genero = document.getElementById("txtGenero").value;
    fNacimiento = document.getElementById("txtFechaNacEmp").value;
    rfc = document.getElementById("txtRFCEmp").value;
    curp = document.getElementById("txtCURPEmp").value;
    ciudad = document.getElementById("txtCiudadEmp").value;
    estado = document.getElementById("txtEstadoEmp").value;
    telefono = document.getElementById("txtTelEmp").value;
    domicilio = document.getElementById("txtDomEmp").value;
    cPostal = document.getElementById("txtCPEmp").value;
    fIngreso = document.getElementById("txtFechaIng").value;
    puesto = document.getElementById("txtPuestoEmp").value;
    sMensual = document.getElementById("txtSueldoEmp").value;
    email = document.getElementById("txtEmailEmp").value;
    codEmpleado = document.getElementById("txtCodEmp").value;
    
    let empleado = {};
    empleado.nombre = nombre;
    empleado.apePa = apePa;
    empleado.apeMa = apeMa;
    empleado.genero = genero;
    empleado.fNacimiento = fNacimiento;
    empleado.rfc = rfc;
    empleado.curp = curp;
    empleado.ciudad = ciudad;
    empleado.estado = estado;
    empleado.telefono = telefono;
    empleado.domicilio = domicilio;
    empleado.cPostal = cPostal;
    empleado.fIngreso = fIngreso;
    empleado.puesto = puesto;
    empleado.sMensual = sMensual;
    empleado.email = email;
    empleado.codEmpleado = codEmpleado;
    empleado.estatus = "Activo";
    empleados[indexEmpleadoSeleccionado] = empleado;
    limpiarCampos();
    cargarTabla();
}

export function eliminarEmpleado(){
    empleados[indexEmpleadoSeleccionado].estatus = "Inactivo";
    limpiarCampos();
    cargarTabla();
}


