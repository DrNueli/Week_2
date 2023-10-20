// Reto 3
import { Person } from "./person.js"; // por que no deja poner .ts??

// 3. Crear la clase contacts con la siguiente estructura:
// • Atributo Público:
// - people: array de objetos de la clase Person.
// • Constructor sin parámetros que inicialice el array people.
// • Métodos Públicos:
// - printCalendar(). Imprime por consola los datos de todas las personas de la agenda. 
// 4. Probar la clase contacts en un fichero denominado contactsTest.ts

export class Contacts {

    public people: Person[]
    
    constructor(){
        this.people = []}

    añadirContacto(Person){
        this.people.push(Person)
    }
    
    public printCalendar(): void {
        this.people.forEach((Person) => {
            console.log(Person)})
}
}