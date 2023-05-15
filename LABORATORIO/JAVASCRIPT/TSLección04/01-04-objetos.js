let x = 10; //variable tipo primitiva
console.log(x.length); undefined
console.log('Tipos primitivos');
//objeto
//Agregamos métodos a los Objetos
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: ´cgil@gmail.com',
    edad: 28
    idioma: 'ES',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lag(lang){
        this.idioma = lang.toUpperCase();
    }
    nombreCompleto: function(){ //método o función en Javascript
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){ //Este es el método get
        return 'El nombre es: 'this.nombre+' edad: '+this.edad;
    }
}
//Diferentes formas de crear un Objeto
console.log(persona.nombre); Carlos
console.log(persona.apellido); Gil
console.log(persona.email); cgil@gmail.com
console.log(persona.edad); 30
console.log(persona); {nombre: 'Carlos', apellido: 'Gil', email: 'cgil@gmail.com',
console.log(persona.nombreCompleto()); Carlos Gil
console.log('Ejecutando con un objeto');
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.dirección = 'Salada 14';
persona2.telefono = '5492618282821';
console.log(persona2.telefono); 5492618282
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un array 
console.log('Usamos el ciclo for in');
//for in acedemos al objeto como si fuera un array
for(propiedad in persona){
    console.log(propiedad); nombre, apellido, email, edad, nombreCompleto
    console.log(persona[propiedad]); Carlos, Gil, cgil@gmail.com, 30,    
}
console.log('cambiamos y eliminamos un eror'); //CAmbiamos y elmiminamos un error
persona.apellida = 'Betacncud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellida; //Eliminamos el error
console.log(persona); ...',apellido: 'Gil', email: cgil@gmail.com, edad: 30, 
//Distintas formas de imprimir un objeto
//Número 1: la más sencilla : concatenar cada valor de cada propiedad
console.log(persona.nombre+', '+persona.apellido);

//Número 2: A través del ciclo for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
//Número 3: La función Object.values()
console.log('Distintas formas de imprimir un objeto forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizaremos el método JSON.stringify
console.log('Distintas formas de imprimir un objeto forma 4')
let personasString = JSON.stringify(persona);
console.log(personasString);

console.log('Comenzamos a utilizar el método get')
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get para idiomas');
console.log(persona.lang);
}

