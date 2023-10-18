// Tema 8: Reto 1: Crearla Clase Person con lasiguienteestructura:
// • Atributos Públicos: - name: string
// - age: number
// • Atributos Privados:
// - address: string
// • Constructor para todos los atributos
// • Metodos Públicos:
// - printName(). Imprime por consola el nombre
// - yearOfBirth(currentYear: number):number. Calcula y devuelve el año de nacimiento - 
// - setAddress(address:string). Modifica el atributo address con el valor pasado como parámetro.
// - getAddress():string. Devuelve el valor del atributo addess.

export class Person {

    public name : string;
    public age : number;
    private address : string;

    constructor(name:string, age:number, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    
    public printName(){
        return this.name
    }

    public yearOfBirth(currentYear:number):number{
        return currentYear - this.age
    }

    public setAddress(address:string):void{
        this.address = address
    }

    public getAddress():string{
        return this.address
    }

}
