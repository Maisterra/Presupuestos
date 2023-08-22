
/*
var ingresos = {
    salario: 20000,
    ventaAuto: 50000
};


var egresos ={
    renta: 4000,
    ropa: 800
};
*/

// Función flecha para dar formato de moneda a presupuesto
const formatoMoneda = (presupuesto) => {
    return presupuesto.toLocaleString('mx', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 2,
    });
};

//Función flecha para dar formato de porcentaje
const formatoPorcentaje = (porcentajeEgreso) => {
    return porcentajeEgreso.toLocaleString('mx', {
        style: 'percent',
        maximumFractionDigits: 1,
    });
};



// Ingresos del cabecero. Aquí debe hacerse el input de los igresos.
const ingresos = document.getElementsByClassName("elemento_valor");
console.log(ingresos.value);

const totalIngreso = () => {
    let totalIngreso=0;
    for (var i=0; i< ingresos.length; i ++) {
        totalIngreso += parseFloat(ingresos[i].innerHTML);
    }
    return totalIngreso;

    

}
console.log(totalIngreso());

/*
const totalIngresos = () => {
    let totalIngreso = 0;

    for (const ingreso of ingresos) {
        totalIngreso += ingreso;
    }
    return totalIngreso;

}; */

//document.getElementById("prueba").innerHTML=totalIngresos();


//Egresos del cabecero. Aquí debe hacerse el input de los egresos
const egresos = [heredadoEgr];

const totalEgresos = () => {
    let totalEgreso = 0;
    for (const egreso of egresos) {
        totalEgreso += egreso;
    }
    return totalEgreso;
};


//Cabecero. Calculo del presupuesto y % de egreso
function cargarCabecero() {
    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = totalEgresos() / totalIngresos();
    const presupuestoMoneda = formatoMoneda(presupuesto);
    const egresoPorcentuado = formatoPorcentaje(porcentajeEgreso);

    console.log(presupuestoMoneda);
    console.log(egresoPorcentuado);
    console.log(totalIngresos());
    console.log(totalEgresos());

}

cargarCabecero();
