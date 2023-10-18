// Reto 7:
// • Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos de la clase Person. No olvides seguir trabajando desde tu rama ”dia1”.
// • El constructor de la clase Contacts no debe tener parámetros de entrada pero debe inicializar el array.
// • Crear un método llamado printPersons que imprima cada uno de los atributos de cada objeto Person.

let Person = require("./person.js");

// Funciona perfecto pero con variables dentro y al exportar siempre aparecen estos datos:
// class Contacts {
//     constructor()
//     {
//         let person5 = new Person (1.6, 70, "rojo", "chica", 1991, ["frances", "andar"]);
//         let person6 = new Person (1.90, 87, "rubio", "chico", 1995, ["estudiar", "bailar"]);
//         this.personas = [{person5}, {person6}]
//     }
//     printPersons(){
//         for(let contacto of this.personas){
//             console.log("contacto: ");
//             for(let propiedad in contacto){
//                 console.log(contacto[propiedad])
//             }
//         }
//     }
// };

// let ListaContactos = new Contacts();
// ListaContactos.printPersons(); 

// 

// Otra Prueba de funcionamiento NO VALIDA:
// class Contactss {
//     constructor()
//     {
//         this.personas = [{}, {}]
//     }
//     printPersons(){
//         for(let contacto of this.personas){
//             console.log("contacto: ");
//             for(let propiedad in contacto){
//                 console.log(contacto[propiedad])
//             }
//         }
//     }
// };

// let ListaContactos = new Contacts();
// ListaContactos.printPersons(); 

// FUNCIONA MUY BIEN; PARA EXPORTARLA, sin datos internos. 
class Contacts {
    constructor()
    {
        this.personas = [];
    }
    añadirPerson(Person){
        this.personas.push(Person);
    }
    printPersons(){
        for(let contacto of this.personas){
            console.log("contacto: ");
            for(let propiedad in contacto){
                console.log(propiedad + " - " + contacto[propiedad])
            }
        }
    }
};

module.exports = Contacts;

//

// let person3 = new Person (1.79, 77, "castaño", "chica", 1987, ["ingles", "boxeo"]);
// let person4 = new Person (1.82, 82, "negro", "chico", 1989, ["leer", "musica"]);

// // let Listado1 = new Contacts;
// // Listado1.añadirPerson(person3);
// // Listado1.añadirPerson(person4);
// // Listado1.printPersons(Listado1);


