// Reto 4: Clase Book
// Crear la Clase Book con la siguiente estructura:
// • Atributos Privados: - title: string
// - nPages: number - isbn: string
// - author: string
// - editorial: string
// • Constructor para todos los atributos.
// • Metodos Públicos:
// - getters y setters para todos los atributos - toString (): string.
// Devuelve un string con TODA la información del libro con la siguiente estructura:
// “Title – Introducción a Javascript Numer of Pages - 233
// ISBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions"

export class Book {
    
    constructor(private title:string, private nPages:number, private isbn:string, private author:string, private editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public getTitle():string{
        return this.title
    }

    public setTitle(newTitle:string):void{
        this.title = newTitle
    }

    public getnPages():number{
        return this.nPages
    }

    public setnPages(newPages:number):void{
        this.nPages = newPages
    }


    public getIsbn():string{
        return this.isbn
    }

    public setIsbn(newIsbn:string):void{
        this.isbn = newIsbn
    }


    public getAuthor():string{
        return this.author
    }

    public setAuthor(newAuthor:string):void{
        this.author = newAuthor
    }


    public getEditorial():string{
        return this.editorial
    }

    public setEditorial(newEditorial:string):void{
        this.editorial = newEditorial
    }

    public toString():string{
        return "Libro: Title - " + this.title + 
        " Number of Pages - " + this.nPages + 
        " ISBN - " + this.isbn + 
        " Author - " + this.author + 
        " Editorial - " + this.editorial
    }
};

// let libro1 = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
// console.log(libro1.toString());

// RETO 6:
// - toString (): string. Devuelve un string con TODA la información de todos los libros de la biblioteca.

// export class Library{
//     constructor(private books:Book[], private address:string, private manager:string){
//         this.books = [];
//         this.address = address;
//         this.manager = manager;
//     }
    
//     public getAddress ():string{
//         return this.address
//     }

//     public setAddress (newAddress:string):void{
//         this.address = newAddress
//     }

//     public getManager():string{
//         return this.manager
//     }

//     public setManager(newManager:string):void{
//         this.manager = newManager
//     }

//     public addBook(book:Book):void{
//         this.books.push(book)
//     }

//                                             // Atascado durante rato porque me daba todo, más aún todo el interior del book. 
//                                             // public toString(){
//                                             //     for (let tomo of this.books){
//                                             //         for(let propiedad in tomo){
//                                             //         console.log(propiedad + " - "+ tomo[propiedad])}};
    
//     public toString():string{
//         let result = "";
//         for (let book of this.books){
//             result += book.toString();
//         }
//         return result;
//     }

//     // public getNumberOfBooks():number{
//     //     let result = Number;
//     //     for (let book of this.nPages)

        
//     //     this.NumberOfBooks=
//     // }

// }

// let book1 = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
// // let book2 = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

// let libre1 = new Library([], "", "");

// libre1.addBook(book1);
// // libre1.addBook(book2);
// // console.log(libre1);
// console.log(libre1.toString());