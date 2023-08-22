


//Clase padre datos para el manejo de datos
class Dato {
    constructor(datos) {
        this.descripcion = datos.descripcion;
        this.valor = datos.valor;

    }

    //programar los getters: estos son para que regrese el valor que le fue asignado a la propiedad
    getDescripcion() {
        return this.descripcion;
    }
    //los setters son los que asignan el valor a la propiedad
    setDescripcion() {
        this.descripcion = newDescripcion;
    }
    getValor() {
        return this.valor;
    }
    setValor() {
        this.valor = newValor;
    }


};

