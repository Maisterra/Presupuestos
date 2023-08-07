
//Cabecero
const cargarCabecero=()=>{
    const presupuesto = totalIngresos () - totalEgresos ();
    const porcentajeEgreso = totalEgresos () / totalIngresos ();

    console.log(presupuesto);
console.log(porcentajeEgreso);
console.log(totalIngresos());
console.log(totalEgresos());

};  



const totalIngresos = () => {
    let totalIngreso=0;
    
    for (const ingreso of ingresos) {
        totalIngreso += ingreso;
        
    }
return totalIngreso;

};

const totalEgresos = () => {
    let totalEgreso=0;
    for (const egreso of egresos) {
        totalEgreso += egreso;
        
    }
return totalEgreso;


};


const formatoMoneda (valor) => {
    const opciones
    style: "moneda",
    moneda: "MXN",
    maximumFractionDigits: 2,


    valor.toLocaleString(es - MXN); {
    }
    return valor.toLocaleString(es-MXM,)
    console.log(valor);

    valor=45.654

}


const ingresos = [100, 200,];
const egresos = [10, 20,];  

cargarCabecero();

