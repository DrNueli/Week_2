// RETO 7
import { Book } from "./book.js"; 
import { Library } from "./library.js";

let book1 = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Manu Smith", "Now Editions");
let book2 = new Book("In Javascript", 278, "234isbn", "Manu Smith", "Ciencia Editions");
let libre1 = new Library([], "", "");

libre1.addBook(book1);
libre1.addBook(book2);

console.log(libre1.toString());
console.log(libre1.getNumberOfBooks());
console.log(libre1.getfindByAuthor("Manu Smith"));
