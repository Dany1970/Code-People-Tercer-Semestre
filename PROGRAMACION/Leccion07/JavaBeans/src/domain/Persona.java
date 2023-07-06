package domain;

import java.io.Serializable;

public class Persona implements Serializable{//Como requerimientos es que los atributos son private
    private String nombre;
    private String apellido;
    
    //Otro requerimiento para que sea un javabeans es que tenga un constructor vacío
    public Persona(){
        
    }
    
    public Persona(String nombre, String apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
 //Otra cosa wue vamos a realizar dentro de la clase es agregar los setters and getters 
//usando el menú contextual insert code, aelect all, y en este caso, marcar Encapsulamiento
// (Encapsulate Fields) ya que es requerido para los getters and setters en un javabeans

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
//También puede agregarse un ToString, un Equals y un hashCode (no son requeridos pero puedesn
    //agregarse como complementos. Agregamos un ToString

    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + ", apellido=" + apellido + '}';
    }
}
//Ya tenemos con esto nuestra JavaBeans creada. Más adelante vamos a ver cómo lo vamos 
//a usar. Es necesario tener el constructor vacío, los métodos get y set de cada atributo
//y además debe ser Serializable, ya que si este objeto es necesario transferirlo en la red 
// de un servidor a otro, este objeto debe ser serializable, lo que básicamente es
//que se convierte nuestro objeto a 0 y 1.