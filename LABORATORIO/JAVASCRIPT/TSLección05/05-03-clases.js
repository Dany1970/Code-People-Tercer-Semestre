class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
 
    //  Cramos el metodo get y set para apellido 
    get apellido(){ 
    return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

}

let persona1 = new Persona('Martín', 'Pérez');
console.log(persona1.nombre); 
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
//console.log(persona1);
let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre); 
persona2.nombre = 'María Laura';
console.log(persona2.nombre);
//console.log(persona2);
