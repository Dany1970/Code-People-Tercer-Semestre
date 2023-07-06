package domain;

//Esta clase hija de la clase empleada, se va a extender de ella
public class Gerente extends Empleado{
    private String departamento;//se hace private porque hasta acá va a llegar esta clase
    
     
    //Vamos con el constructor
    
    public Gerente(String nombre, double sueldo, String departamento){
        
    //Accederemos a los atributos de la clase padre, llamándolo a través de super
        super(nombre, sueldo);
        this.departamento = departamento;
    }

//Así tal cual está la clase hija, cuando la testeamos (ver script TestSobreescritura)
//no muestra el depaprtamento, porque este método no está en la clase padre, así es que 
//a continuación vamos a emplear la sobreescritura:

@Override //el @ implica una anotación, que indica al compilador que este método
//está sobreescribiendo un método de la clase padre
public String obtenerDetalles(){ //Esto tiene que ser idéntido a lo que se hizo en la 
                                    //clase padre, para que sea sobreescritura,  sino es
                                     //simplemente un método diferente
                                     //tampoco puede ser más restrictivo que la clase padre
    return super.obtenerDetalles()+", Departamento: "+this.departamento;

}
}
//Ahora lo volvemos a probar con el test