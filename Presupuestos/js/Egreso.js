// crear la clase heredada egreso

class Egreso extends Dato {
    contadorEgresos = 0

    //invocar constructor de la clase padre Dato
    constructor(descripcion, valor) {
        super(descripcion, valor);

    };
};
var descrip={
    descripcion:document.getElementById("descripcion").value,
    valor:document.getElementById("valor").value


}
console.log(descrip.descripcion);

var heredadoEgr=new Egreso(descrip);
console.log(`descripcion: ${heredadoEgr.descripcion}, valor: ${heredadoEgr.valor}`);

