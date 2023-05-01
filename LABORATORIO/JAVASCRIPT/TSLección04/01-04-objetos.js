let x = 10; //variable tipo primitiva
console.log(x.length); undefined

//objeto
//Agregamos métodos a los Objetos
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: ´cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ //método o función en Javascript
        return this.nombre+''+this.apellido;
    }
}

//Diferentes formas de crear un Objeto
console.log(persona.nombre); Carlos
console.log(persona.apellido); Gil
console.log(persona.email); cgil@gmail.com
console.log(persona.edad); 30
console.log(persona); {nombre : 'Carlos', apellido: 'Gil', email: 'cgil@gmail.com',
console.log(persona.nombreCompleto()); Carlos Gil

let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.dirección = 'Salada 14';
persona2.telefono = '5492618282821';
console.log(persona2.telefono); 5492618282

console.log(persona['apellido']); //Accedemos como si fuera un array 

<<<<<<< HEAD
//Como acceder a propiedades objeto //console.log
=======
//Como acceder a propiedades objeto
>>>>>>> 9e03a341e4918761ec35acb40888c4b0d94d5150
//for in
for(propiedad in persona){
    console.log(propiedad); nombre, apellido, email, edad, nombreCompleto
    console.log(persona[propiedad]); Carlos, Gil, cgil@gmail.com, 30, 
}
//Agregar y eliminar propiedades de los Objetos
persona.apellido = 'Betacncud';
delete persona.apellido; //Cambiamos dinamicamente un valor del objeto


