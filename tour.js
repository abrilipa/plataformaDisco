// Preguntar el nombre y la edad del usuario
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuál es tu edad?");

// Mostrar el mensaje al usuario
if (nombre && edad) {
    alert(`Hola ${nombre}, de ${edad} años, ¿te interesaría adquirir tickets? 🎟️`);
}
