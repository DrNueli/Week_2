// Tema 7 POO 
// Reto 1.4 Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe tener como mínimo 2 parámetros de entrada.


class Person {
    constructor(altura, peso, colorPelo, genero, yearOfBirth, hobbies){ // todos los atributos, tienen que estar metidos aqui como parametros del constructor??
    this.altura = altura;
    this.peso = peso;
    this.colorPelo = colorPelo;
    this.genero = genero;
    this.yearOfBirth = yearOfBirth;
    this.hobbies = hobbies;
    }

// Reto 2: Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la clase.
IMC(altura, peso){
    return this.peso / (this.altura * this.altura)
}

// Reto 3: Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome como parámetro el año y calcule la edad de la persona.
edad(añoActual){
    return añoActual - this.yearOfBirth
}

// Reto 4: Añadir un método que se denomine printAll que muestre por consola cada uno de los atributos de la clase Person seguido por “-” y el valor del atributo.

printAll(){
    for(let all in this){ // poner this!!
    console.log(all + " - " + this[all])
    }}

// Reto 5: Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método denominado printHobbies, que muestre por consola las aficiones de la persona.
printHobbies(){
    console.log(this.hobbies)}
}

let Person1 = new Person (1.8, 82, "negro", "masculino", 1989, ["leer", "senderismo"]); // hay que llamar a la clase corecto??
console.log(Person1.IMC()); // (this.altura, this.peso)
console.log(Person1.edad(2023));
Person1.printAll();
Person1.printHobbies();



// Reto 6:
// • Guardar la clase Person en un fichero con extensión .js (person.js).
// • Modificar ese fichero para exportar la clase.
// • Importar la clase en otro fichero denominado personTest.js.
// • Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1”.