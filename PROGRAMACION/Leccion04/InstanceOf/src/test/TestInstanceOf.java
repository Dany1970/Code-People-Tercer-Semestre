package test;

import domain.*;

public class TestInstanceOf {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        determinarTipo(empleado1);
        Gerente gerente1 = new Gerente("José", 5000, "Sistemas");
    }
    
    //Ahora vamos a aplicar el polimorfismo
    public static void determinarTipo(Empleado empleado){
        if(empleado instanceof Gerente){
            //Empezamos a preguntar por las clases más específicas (hijas)
            System.out.println("Es de tipo Gerente");
            Gerente gerente = (Gerente)empleado;
            System.out.println("gerente = "+gerente.getDepartamento());
        }
        else if(empleado instanceof Empleado){
            System.out.println("Es de tipo Empleado ");
            //Gerente gerente = (Gerente)empleado;
            //System.out.println("gerente = "+gerente.getDepartamento());
        }
        else if(empleado instanceof Object){
            System.out.println("Es de tipo Objeto");
        }
    }
    
}
