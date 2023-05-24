package test;

import domain.*;

public class TestSobreescritura {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        imprimir(empleado1);
        //System.out.println("empleado1 = " + empleado1.obtenerDetalles());
        Gerente gerente1 = new Gerente("José", 5000, "Sistemas");
        imprimir(gerente1);
        //System.out.println("gerente1 = " + gerente1.obtenerDetalles());
    }
    
    //Ahora vamos a aplicar el polimorfismo
    public static void imprimir(Empleado empleado){
        System.out.println("empleado = " + empleado.obtenerDetalles());
    }
}
//Utilizamos este test para la sobreescritura (para el mismo usamos las clases padre
//Empleado e hija con el @override gerente e instanciamos la clase con gerente1-
//Vamos a usar el mismo test para probar el POLIMORFISMO, para lo cual comentamos 
//el objet1o gerente1 creado y definimos unas variables que serán de la clase padre.
//La variable creada en segunda instancia es empleado1, que por pertenecer a la clase
//padre nos pide importar tb esa clase además de la clase Gerente (al importar 
//la clase Gerente, apareció "import domain.Gerente", ahora cambiamos ese Gerente por un *
//lo cual importa todas las clases que están en domain.
//Luego descomentamos gerente1, para crear una variable de la clase hija

//Polimorfismo: básicamente lo que entendí, es que dentro de la clase creada para testear 
//el override, podemos crear otro método, como por ejemplo para imprimir basado en los métodos
//de la clase hija. A practicar mucho para terminar de entender la cuestión!!