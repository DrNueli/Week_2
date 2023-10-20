
class Person {
    constructor(altura, peso, colorPelo, genero, yearOfBirth, hobbies){ 
        // todos los atributos, tienen que estar metidos aqui como parametros del constructor??
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

module.exports = Person