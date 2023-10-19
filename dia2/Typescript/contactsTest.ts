import { Contacts } from "./contacts.js";
import { Person } from "./person.js";

let person7 = new Person ("Manu", 34, "Cartagena");
let person8 = new Person ("Pili", 36, "Cabo de Palos");


let agenda = new Contacts()

agenda.añadirContacto(person7);
agenda.añadirContacto(person8);
agenda.printCalendar();
