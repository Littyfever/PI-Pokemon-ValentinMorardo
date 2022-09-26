const validacion = (input) => {

    let validacionNombre = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
    let validacionNumeros = /^[0-9]+$/;
    let validacionUrl = /^(ftp|http|https):\/\/[^ "]+$/;
    let errores= {}

                    // NOMBRE
    if(!input.nombre) {
        errores.nombre='El campo nombre es obligatorio!';
    } else if(input.nombre.length > 20) {
        errores.nombre = 'El maximo de caracteres para nombre es 20!';
    } else if(input.nombre.length < 3) {

        errores.nombre = 'El minimo de caracteres para nombre es 3!';
    } else if( !(validacionNombre.test(input.nombre)) ) {
        errores.nombre = 'El nombre solo puede contener letras!';
    }


                        //VIDA
    if(!(validacionNumeros.test(input.vida))) {
        errores.vida='La vida solo puede contener numeros!';
    } else if(input.vida < 1) {
        errores.vida = 'La vida minima es 1!';
    } else if(input.vida > 9999) {
        errores.vida = 'La vida maxima es 9999!'
    }


                        //ATAQUE
    if(!(validacionNumeros.test(input.ataque))) {
        errores.ataque = 'El ataque solo puede contener numeros!';
    } else if(input.ataque < 5) {
        errores.ataque = 'El ataque minimo es 5!';
    } else if(input.ataque > 9999) {
        errores.ataque = 'El ataque maximo es 9999!'
    }


                    //DEFENSA
    if(!(validacionNumeros.test(input.defensa))) {
        errores.defensa = 'La defensa solo puede contener numeros!';
    } else if(input.defensa < 5) {
        errores.defensa = 'La defensa minimo es 5!';
    } else if(input.defensa > 9999) {
        errores.defensa = 'La defensa maximo es 9999!'
    }


                        //VELOCIDAD
    if(!(validacionNumeros.test(input.velocidad))) {
        errores.velocidad = 'Ea velocidad solo puede contener numeros!';
    } else if(input.velocidad < 10) {
        errores.velocidad = 'La velocidad minimo es 10!';
    } else if(input.velocidad > 9999) {
        errores.velocidad = 'La velocidad maximo es 9999!'
    }
    
    
                        //ALTURA
    if(!(validacionNumeros.test(input.altura))) {
        errores.altura = 'Ea altura solo puede contener numeros!';
    } else if(input.altura < 10) {
        errores.altura = 'La altura minimo es 10!';
    } else if(input.altura > 9999) {
        errores.altura = 'La altura maximo es 9999!'
    }


                        //PESO
    if(!(validacionNumeros.test(input.peso))) {
        errores.peso = 'El peso solo puede contener numeros!';
    } else if(input.peso < 10) {
        errores.peso = 'El peso minimo es 10!';
    } else if(input.peso > 9999) {
        errores.peso = 'El peso maximo es 9999!'
    }


                        //IMAGEN
    if( !(validacionUrl.test(input.imagen)) ) {
        errores.imagen = 'Ingrese un URL correcto'
    }


    return errores;
}
export default validacion;