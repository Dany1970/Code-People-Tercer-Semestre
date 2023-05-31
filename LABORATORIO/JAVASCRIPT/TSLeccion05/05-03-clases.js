//let persona3 = new Persona("Pipi", "Posta");

class Persona{//Clase padre

    static contadorObjetosPersona = 0;
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa el contador"+Persona.contadorObjetosPersona);

    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre+" "+this._apellido;

    }
    //Sobreescribiendo el método de la clase padre (Object)
    toString(){//Regresa un String
        //Se aplica el polimorfismo que significa múltiples formas en tiempo de ejecución
        //El método que se ejecuta depende de si es una referencia de tipo padre o hija
        return this.nombreCompleto();
        
    }

    //Vamos a agregar un método static que se va a asociar a la clase, no a los objetos
    static saludar(){
        console.log("Saludos desde este método static");
    }
    //Vamos a crear otro método estático pero esta vez con argumentos
    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }

}

class Empleado extends Persona{ //Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

}
let persona1 = new Persona("Martín", "Fierro");
console.log(persona1.nombre);  
persona1.nombre = "Jorge Alberto";   
console.log(persona1.nombre);  
//consola.log(persona1);
let persona2 = new Persona("Ana","García");   
console.log(persona2.nombre);  
persona2.nombre = "María";
console.log(persona2.nombre);  
//console.log(persona2);

let empleado1 = new Empleado("María", "González", "Compras");
console.log(empleado1); 
console.log(empleado1._nombre)

//persona1.saludar(); no se utiliza desde el objeto
//Si se utiliza desde una clase (no es posible llamar un método estático desde una clase)
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);