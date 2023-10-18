
import { Person } from "./person.js"; // por que no deja poner .ts??

let Persona1 = new Person ("Manu", 1989, "Cartagena");
let address = Persona1.getAddress();
console.log(address);
Persona1.setAddress('Cabo de Palos');
console.log(Persona1.getAddress());
console.log(Persona1.name);
console.log(Persona1.yearOfBirth(2023));

// tsc -t es5 person.ts