

// Función flecha para dar formato de moneda a presupuesto
const formatoMoneda = (presupuesto) => {
  return presupuesto.toLocaleString('es', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 2,
  });
};

//Función flecha para dar formato de porcentaje
const formatoPorcentaje = (porcentajeEgreso) => {
    return porcentajeEgreso.toLocaleString('es', {
      style: 'percent',
      maximumFractionDigits: 1,
    });
  };



// Ingresos del cabecero. Aquí debe hacerse el input de los igresos.
const ingresos = [100, 500];

const totalIngresos = () => {
    let totalIngreso = 0;

    for (const ingreso of ingresos) {
        totalIngreso += ingreso;
    }
    return totalIngreso;

};

//document.getElementById("prueba").innerHTML=totalIngresos();


//Egresos del cabecero. Aquí debe hacerse el input de los egresos
const egresos = [10, 28,];

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
    const presupuestoMoneda=formatoMoneda(presupuesto);
    const egresoPorcentuado  =formatoPorcentaje(porcentajeEgreso);

    console.log(presupuestoMoneda);
    console.log(egresoPorcentuado);
    console.log(totalIngresos());
    console.log(totalEgresos());

}

cargarCabecero();


