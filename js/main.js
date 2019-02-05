    //Creacion de Variables
    var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById('error');

    //Creacion de Funciones

    function validarNombre(e) {
        if(nombre.value == '' || nombre.value == null){
            console.log("Porfavor ingresa un nombre");
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor ingresa un nombre</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarCorreo(e) {
        if(correo.value == '' || correo.value == null){
            console.log("Porfavor ingresa un correo");
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor ingresa un correo</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarSexo (e) {
        if(sexo.value == '' || sexo.value == null) {
            console.log("Porfavor ingresa tu sexo");
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor ingresa tu sexo</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarTerminos (e) {
        if(terminos.checked == false) {
            console.log("Porfavor acepte los terminos y condiciones");
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor acepte los terminos</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarFormulario(e) {

        error.innerHTML = "";

        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
    }

    //Llamando a las funciones
    formulario.addEventListener('submit', validarFormulario);