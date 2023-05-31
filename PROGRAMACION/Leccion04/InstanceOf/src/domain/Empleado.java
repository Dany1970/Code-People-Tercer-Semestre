//Overriding: vamos a aplicar el concepto de herencia: vamos a crear una clase padre
//ya que la sobreescritura significa que un método de la clase hija modifica la clase
//padre, es decir que lo sobreescribe 
 

package domain;


public class Empleado {//colocamos los atributos de la clase padre Empleado
    protected String nombre;
    protected double sueldo;
    //Ahora vamos por el constructor de tipo público
    public Empleado(String nombre, double sueldo){//El constructor no va a estar vacío
        //si no que va a tener los dos atributos
        //Colocamos la instancia de estos dos atributos:
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    //Agregamos el método que luego vamos a sobreescribir en la clase hija
    public String obtenerDetalles(){
        return "Nombre: "+this.nombre+", Sueldo: "+this.sueldo;
    }
//Con insert code agregamos los métodos getter y setters para ambos atributos
//Select all o seleccionamos manualmente todos
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

    
}
//Hasta aquí tenemos la clase padre creada con sus atributos con un constructor con
//el método que vamos a sobreescirbir y los métodos getter y steer para los atributos
// de nombre y sueldo. Ahora vamos a continuar con la creación de la clase hija, en 
//el mismo paquete de domain.
