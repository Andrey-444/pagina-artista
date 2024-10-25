// Solicitar datos al usuario
const nombre = prompt("Ingresa tu nombre:");
const edad = prompt("Ingresa tu edad:");
const ciudad = prompt("Ingresa tu ciudad:");

// Crear un objeto persona
const persona = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad
};

// Mostrar las propiedades del objeto persona usando for...in
console.log("Datos de la Persona:");
for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// Solicitar frutas favoritas
const frutas = [];
let fruta;
while ((fruta = prompt("Ingresa una fruta favorita (o deja vacío para terminar):")) !== "") {
    frutas.push(fruta); // Agregar fruta al arreglo
}

// Mostrar las frutas usando for...of
console.log("Frutas Favoritas:");
for (const fruta of frutas) {
    console.log(fruta);
}
