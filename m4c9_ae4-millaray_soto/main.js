// Datos de ejemplo para simular la carga
const datosSimulados = ["Socio 1", "Socio 2", "Socio 3"];

// --- PASO 1: CALLBACKS ---

// Función que simula carga de datos con callback
function cargarDatos(callback, simularError = false) {
    console.log("Iniciando carga con Callbacks...");
    setTimeout(() => {
        if (simularError) {
            callback("Error: No se pudieron cargar los datos (Callback)", null);
        } else {
            callback(null, datosSimulados);
        }
    }, 1500);
}

// Callback para procesar los datos
const procesarDatos = (error, datos) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Datos cargados con Callback:", datos);
    }
};

// Ejecución del Paso 1
cargarDatos(procesarDatos);


// --- PASO 2: PROMESAS ---

// Función que devuelve una promesa 
function cargarDatosPromesa(simularError = false) {
    console.log("Cargando datos (Promesa)...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simularError) {
                reject("Error: Fallo en la carga (Promesa)");
            } else {
                resolve(datosSimulados);
            }
        }, 2000);
    });
}

// Manejo de la promesa con then/catch
cargarDatosPromesa()
    .then(datos => console.log("Resultado Promesa:", datos))
    .catch(error => console.error(error));


// --- PASO 3: ASYNC / AWAIT --- 

// Función asíncrona con manejo de errores
async function cargarDatosAsync() {
    console.log("Iniciando proceso Async/Await...");
    try {
        // Espera la resolución de la promesa
        const datos = await cargarDatosPromesa();
        console.log("Datos listos (Async/Await):", datos);
    } catch (error) {
        // Manejo de errores con try/catch
        console.error("Capturado en Catch:", error);
    }
}

// Ejecución del Paso 3
cargarDatosAsync();