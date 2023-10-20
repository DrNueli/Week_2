import { Book } from "./book.js"

let libro2 = new Book("Actualización en Medicina", 1317, "9-123-6345-90", "AJ Fernández", "WIKScience");

console.log(libro2.getTitle());
libro2.setTitle("Lecciones en Enfermería");
console.log(libro2.getTitle());

console.log(libro2.getnPages());
libro2.setnPages(248);
console.log(libro2.getnPages());

console.log(libro2.getIsbn());
libro2.setIsbn("DOI-123-123-123");
console.log(libro2.getIsbn());

console.log(libro2.getAuthor());
libro2.setAuthor("Manuel Moreno");
console.log(libro2.getAuthor());

console.log(libro2.getEditorial());
libro2.setEditorial("Ciencia Sanitaria");
console.log(libro2.getEditorial());
