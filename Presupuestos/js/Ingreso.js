

// crear la clase heredada ingreso


class Ingreso extends Dato {
    contadorIngresos = 0

    //invocar constructor de la clase padre Dato
    constructor(descripcion, valor) {
        super(descripcion, valor);

    };
};
var desc={
    descripcion:document.getElementById("descripcion").value,
    valor:document.getElementById("valor").value
}
console.log(desc.descripcion);

var heredadoIng=new Ingreso(desc);
console.log(`descripcion: ${heredadoIng.descripcion}, valor: ${heredadoIng.valor}`);




