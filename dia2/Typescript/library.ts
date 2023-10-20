
import { Book } from "./book.js"; 

// RETO 6:
// - toString (): string. Devuelve un string con TODA la información de todos los libros de la biblioteca.

export class Library{
    constructor(private books:Book[], private address:string, private manager:string){
        this.books = [];
        this.address = address;
        this.manager = manager;
    }
    
    public getAddress ():string{
        return this.address
    }

    public setAddress (newAddress:string):void{
        this.address = newAddress
    }

    public getManager():string{
        return this.manager
    }

    public setManager(newManager:string):void{
        this.manager = newManager
    }

    public addBook(book:Book):void{
        this.books.push(book)
    }
    
    public toString():string{
        let result = "";
        for (let book of this.books){
            result += book.toString();
        }
        return result;
    }

    public getNumberOfBooks():number{
        let dato = this.books.length;
        return dato
    }
            // Devuelve los libros cuyo autor coincida con el nombre que se pasa como parámetro del método.
            // si por ejemplo fuese solo parte del nombre?
    public getfindByAuthor (author:string):Book[]{  
        let filtrado = this.books.filter((book) => {book.getAuthor() === author}); 
        return filtrado
    }
}

// let book1 = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
// let book2 = new Book("In Javascript", 278, "234isbn", "Manu Smith", "Ciencia Editions");

// let libre1 = new Library([], "", "");

// libre1.addBook(book1);
// libre1.addBook(book2);

// console.log(libre1.toString());
// console.log(libre1.getNumberOfBooks());
// console.log(libre1.getfindByAuthor("Manu Smith"));