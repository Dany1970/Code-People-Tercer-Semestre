//let persona3 = new Persona("Pipi", "Posta");

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;

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

    set nombre(apellido){
        this._apellido = apellido;
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

}
Let persona1 = new Persona("Martín", "Fierro");
console.log(persona1.nombre);  
persona1.nombre = "Jorge Alberto";   
console.log(persona1.nombre);  
//consola.log(persona1);
Let persona2 = new Persona("Ana","García");   
console.log(persona2.nombre);  
persona2.nombre = "María";
console.log(persona2.nombre);  
//console.log(persona2);

Let empleado1 = new Empleado("María", "González", "Compras");
console.log(empleado1); 
console.log(empleado1._nombre)
