
//Importaciones de Clases:
let Person = require("./person.js");
let Contacts = require("./contacts.js");

let person5 = new Person (1.50, 53, "verde", "chica", 1981, ["jugar", "boxeo"]);
let person6 = new Person (1.65, 55, "moreno", "chico", 1983, ["programar", "musica"]);

let listado2 = new Contacts();
listado2.añadirPerson(person5);
listado2.añadirPerson(person6);
listado2.printPersons();

