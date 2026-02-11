// Aca se define la clase socio(parrillero?)
class Socio {
    // Propiedad privada para el estado del socio
    #activo;

    constructor(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.#activo = false; // Aca esta el Booleano
        
        // Incrementa el contador estático en cada instancia
        Socios.totalSocios++;
    }

    // Esto hace que el socio se active y muestre el ultimate socio (true)
    activar() {
        this.#activo = true;
        console.log(`>>> El Socio ${this.nombre} ha sido ultra activado.`);
    }

    // Con esto se editan los datos del socio
    editarSocio(nuevoNombre, nuevoApellido, nuevaEdad) {
        this.nombre = nuevoNombre || this.nombre;
        this.apellido = nuevoApellido || this.apellido;
        this.edad = nuevaEdad || this.edad;
    }

    // Para ver si es mayor de edad el prossspecto correspondiente
    verificarEdad() {
        return this.edad >= 18;
    }

    // Aca te muestra los datos especificos de los socios
    mostrarDatos() {
        return `[ID: ${this.id}] ${this.nombre} ${this.apellido}, ${this.edad} años - Activo: ${this.#activo}`;
    }
}

// Definición de la clase Socios
class Socios {
    // Propiedad estática para contar instancias
    static totalSocios = 0;

    constructor() {
        // Lista para almacenar socios
        this.listaSocios = [];
    }

    // El pushhh para agregar socios a la lista
    agregarSocio(socio) {
        this.listaSocios.push(socio);
    }

    // El estatico para mostrar el total de socios(parrilleros??(esto desesperada por un pixel de libertad creativa))
    static mostrarTotalSocios() {
        console.log(`-----------------------------------`);
        console.log(`TOTAL FINAL DE SOCIOS VIP ULTIMATE ULTRA: ${Socios.totalSocios}`);
        console.log(`-----------------------------------`);
    }

    // Aca se muestran los que si quedaron y los que no (muro de la vergüenza)
    mostrarDatos() {
        console.log("--- LISTADO DE SOCIOS VIP ULTIMATE ULTRA Y LOS QUE NO ---");
        this.listaSocios.forEach(s => console.log(s.mostrarDatos()));
    }
}

// Algo para probar que tal anda
const sistema = new Socios();

// Primero lo primero: crear los socios
const s1 = new Socio(101, "Cesar", "Torobolino", 22);
const s2 = new Socio(102, "Denisse", "Interesante", 16);
const s3 = new Socio(103, "Javier", "Turbina", 45);

sistema.agregarSocio(s1);
sistema.agregarSocio(s2);
sistema.agregarSocio(s3);

// Aca se ejecutan las pruebas finales
s1.activar(); // Activando al maguito explosivo
console.log("Datos del Socio 101:", s1.mostrarDatos()); // Mostrar datos
console.log(`¿Estas seguro de que ${s2.nombre} es mayor de edad? (Este mensaje dice que no jeje): ${s2.verificarEdad()}`); // Verificar la edad 

s3.editarSocio("Javier", "Equilibrio Turbina", 36); // Editar socio
console.log("Datos editados del Socio 103:", s3.mostrarDatos());

sistema.mostrarDatos(); // Vemos a todo de nuevo
Socios.mostrarTotalSocios(); // Final final con el total