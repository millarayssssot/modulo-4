// 1. Datos iniciales proporcionados [cite: 52, 53, 66]
const nuestroBanco = "Banco de la Gente";
const pagos = [
    { id: 1, monto: 100, fecha: "2022-01-01", empresaId: 1 },
    { id: 2, monto: 200, fecha: "2022-01-02", empresaId: 2 },
    { id: 3, monto: 300, fecha: "2022-01-03", empresaId: 3 },
    { id: 4, monto: 400, fecha: "2022-01-04", empresaId: 1 },
    { id: 5, monto: 500, fecha: "2022-01-05", empresaId: 2 },
    { id: 6, monto: 600, fecha: "2022-01-06", empresaId: 3 },
    { id: 7, monto: 700, fecha: "2022-01-07", empresaId: 1 },
    { id: 8, monto: 800, fecha: "2022-01-08", empresaId: 2 },
    { id: 9, monto: 900, fecha: "2022-01-09", empresaId: 3 },
    { id: 10, monto: 1000, fecha: "2022-01-10", empresaId: 1 },
];

const empresas = [
    { id: 1, nombre: "Maceta Alta" },
    { id: 2, nombre: "Ladrillo Viejo" },
    { id: 3, nombre: "Humedad Eterna por Siempre" },
    { id: 4, nombre: null },
];

// 1. Cantidad de pagos usando template literals 
console.log(`El banco ${nuestroBanco} tiene un total de ${pagos.length} pagos realizados.`);

// 2. Función para obtener pagos de una empresa por ID [cite: 73]
const obtenerPagosPorEmpresa = (id) => pagos.filter(pago => pago.empresaId === id);
console.log("Pagos Empresa 1:", obtenerPagosPorEmpresa(1));

// 3. Función para balance total de todos los pagos [cite: 74]
const obtenerBalanceTotal = () => pagos.reduce((acc, pago) => acc + pago.monto, 0);
console.log(`Balance total de pagos: $${obtenerBalanceTotal()}`);

// 4. Pagos realizados después de una fecha dada [cite: 75]
const pagosPostFecha = (fechaLimite) => pagos.filter(pago => pago.fecha > fechaLimite);
console.log("Pagos después del 2022-01-05:", pagosPostFecha("2022-01-05"));

// 5. Destructuring para separar empresas e imprimir nombres [cite: 76, 77]
const [empresa1, empresa2, empresa3, empresa4] = empresas;
console.log(`Empresas: ${empresa1.nombre}, ${empresa2.nombre}, ${empresa3.nombre}, ${empresa4.nombre ?? "Sin nombre"}`);

// 6. Añadir nueva empresa e imprimir lista [cite: 78]
const nuevaEmpresa = { id: 5, nombre: "Cimiento Firme" };
empresas.push(nuevaEmpresa);
console.log("Empresas actualizadas:", empresas);

// 7. Añadir nuevo pago de la nueva empresa [cite: 79]
const nuevoPago = { id: 11, monto: 1500, fecha: "2022-01-15", empresaId: 5 };
pagos.push(nuevoPago);
console.log("Pagos actualizados:", pagos);

// 8. Función para editar monto de un pago por ID [cite: 80]
const editarMontoPago = (id, nuevoMonto) => {
    const pago = pagos.find(p => p.id === id);
    if (pago) {
        pago.monto = nuevoMonto;
    }
};
editarMontoPago(1, 150);
console.log("Pago ID 1 actualizado:", pagos.find(p => p.id === 1));