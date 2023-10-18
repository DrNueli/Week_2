// Reto 6:
// • Guardar la clase Person en un fichero con extensión .js (person.js).
// • Modificar ese fichero para exportar la clase.
// • Importar la clase en otro fichero denominado personTest.js.
// • Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1”.

let Personaa = require("./person.js");

let Person2 = new Personaa (1.79, 77, "castaño", "chica", 1987, ["ingles", "boxeo"]); //en este caso le he cambiado el nombre a la clase al importarla
console.log(Person2.IMC()); // (this.altura, this.peso)
console.log(Person2.edad(2023));
Person2.printAll();
Person2.printHobbies();