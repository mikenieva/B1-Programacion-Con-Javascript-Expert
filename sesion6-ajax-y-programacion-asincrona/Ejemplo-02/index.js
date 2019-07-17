const saludar = nombre => {
    alert('Hola ' + nombre);
  }
  
const interaccionUsuario = (callback) => {
    const nombre = prompt("Ingresa tu nombre.");
    callback(nombre);
  }
  
  interaccionUsuario(saludar);
