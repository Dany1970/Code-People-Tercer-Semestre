//* CLASE PADRE/SUPERCLASE/MADRE: Persona */
class Persona {
    // extends Object
    //static contadorObjetosPersona = 0 // atributo estatico
static contadorPersonas = 0 // atributo estatico
static get MAX_OBJ() { // este metodo simula una constante para el maximo de personas 
    return 5
}

email = 'Valor default email' // atributo no estatico

// De no tener un constructor, por defecto tenemos el constructor vacio
constructor(nombre, apellido) {
    this._nombre = nombre
    this._apellido = apellido
      //Persona.contadorObjetosPersona += 1
      //console.log(`Se incrementa el contador: ${Persona.contadorObjetosPersona}`)
    if(Persona.contadorPersonas < Persona.MAX_OBJ) {
        this.idPersona =  ++Persona.contadorPersonas 
    } else {
        console.log('Se ha superado el maximo de objetos permitidos')
    }
}

// Getter ->obtiene   y Setter ->modifica 
get nombre() {
    return this._nombre
}
get apellido() {
    return this._apellido
}
set nombre(nombre) {
    this._nombre = nombre
}
set apellido(apellido) {
    this._apellido = apellido
}

// Heredar método
nombreCompleto() {
    return this.idPersona+ ', '+this._nombre + ', ' + this._apellido
}

// toString lo hereda de clase Object
toString() {
    return this.nombreCompleto()
}

static saludar() {
    console.log('Saludo desde el método static')
}

static saludar2(persona) {
    console.log(`Hola ${persona.nombre} ${persona.apellido}`)
}
}

//* CLASE HIJA/O: Empleado */
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
    super(nombre, apellido)
    this._departamento = departamento
    }

get departamento() {
    return this._departamento
    }

set departamento(departamento) {
    this._departamento = departamento
    }

// Sobreescritura -> modificar el comportamiento de la clase padre(Object)
nombreCompleto() {
    // Se aplica el polimorfismo
    // El metodo que se ejecuta depende si es una referencia de la clase padre o hija
    return super.nombreCompleto() + ', departamento: ' + this._departamento
    }
}

// Instancio objetos de mi clase Persona
let persona1 = new Persona('Martin', 'Lopez')
let persona2 = new Persona('Martina', 'Lara')

// Con el setter modifico los nombres
persona1.nombre = 'Carlos'
persona2.nombre = 'Maria Laura'

// Con el setter modifico los apellidos
persona1.apellido = 'Gomez'
persona2.apellido = 'Costa'

// Instancio un objeto de la clase empelado
let empleado1 = new Empleado('María', 'Ramirez', 'ventas')
console.log(empleado1);
console.log(empleado1.nombreCompleto());

  //* Palabra static con métodos: Parte 1 y 2 */
   
// no se puede usar desde el objeto
// No puedo hacer: persona1.saludar()
// TypeError: persona1.saludar is not a function
Persona.saludar() // Saludo desde el método static
Persona.saludar2(persona1) // Hola Carlos Gomez

Empleado.saludar() // Saludo desde el método static
Empleado.saludar2(empleado1) // Hola María Ramirez

  //* Atributos estáticos */
// No se puede acceder a una referencia del objeto
console.log(persona1.contadorObjetosPersona) // undefined
// Hay que acceder por referencia de clase
console.log(
    'Atributo estático desde referencia de la clase: ',
    Persona.contadorObjetosPersona
  ) // Atributo estático desde referencia de la clase:  3
console.log(
    'Atributo estático desde referencia de la clase hija: ',
    Empleado.contadorObjetosPersona
  ) // Atributo estático desde referencia de la clase hija:  3

  //* Atributos estáticos vs No estáticos */
console.log('Valor no estatico desde el objeto persona1: ',persona1.email)
console.log('Valor no estatico desde el objeto empleado1: ', empleado1.email)
// No se puede acceder desde la clase en si, no puedo hacer: Persona.email

  //* Uso de la palabra static: Parte 1 y 2 */
//Esta es la manera de acceder a atributos y métodos de manera dinámica 
  console.log(persona1.toString()) // 1, Carlos, Gomez
  console.log(persona2.toString()) // 2, Maria Laura, Costa
  console.log(empleado1.toString()) // 3, María, Ramirez, departamento: ventas
  console.log(Persona.contadorPersonas) // 3

const persona3 = new Persona('Carla', 'Pertosi')
  console.log(`persona3: ${persona3.toString()}`) // persona3: 4, Carla, Pertosi
  console.log(Persona.contadorPersonas) // 4

//Función de persona
function Persona3(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopes','lopezl@gmail.com');
padre.nombre ='Luis'; //MODIFICAMOS EL NOMBRE
console.log(padre);
console.log(padre.nombreCompleto()); //UTILIZAMOS LA FUNCION
let madre = new Persona3('Laura','contrera','contrera@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());

  //* Creación de constantes estáticas */
// Se crea un metodo estatico 
console.log('MAX_OBJ: ',persona1.MAX_OBJ) // MAX_OBJ: 5
// No puedo modificar ni alterar: Persona.MAX_OBJ = 10 no cambia datos
const persona4 = new Persona('Franco', 'Diaz')
  console.log(`persona4: ${persona4.toString()}`) // persona4: 5, Franco, Diaz