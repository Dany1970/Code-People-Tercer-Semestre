import java.util.Scanner:
public class Calculadora UTN ´{
    public static void main (String[] args){
        Scanner entrada = new Scanner (System.in):
        while (true) {// Cicclo infinit0 
       System.out.println("**********Apliacion Calculadora************")
        } mostrarMenu()


        }
    }
}
//Clasee 9 Parte 5
        switch (operacion)) { //SUMA
            case 1 -> {
                resultado= operando 1 + operando 2;
                System.out.println("Resultado de la suma:"+resultado):

                
                )
            }:
            case 2 -> { //RESTA
                resultado= operando1- operando2; 
                System.out.println("Resultado de la resta ":+resultado);
            
            }

            case 3-> { //DIVISION
                resultado = operando1 - operando2;
                System.out.println("Resutlado de la division": +resultado)

            }
            case 4-> {//MULTIPLIACION
                resultado = operando * operando2;
                System.out.println("Resultado de la multiplicacion" +resultado)
            }
            default -> System.out.println("Opcion erronea" ´+operacion);
         
        else if (operacion =5) {
            System.out.println("Hasta pronto...")
             break; //rompe el ciclo y sale

        
        }
        else {
            Systen.oy.println( "Opcion a realizar")
        }
      // Imprimimpos un salto de linea antes de repetir el menú
        System.out.println ();

        }catch ( Excecption e) { //Fin try, comienzo del catch
            System.out.println("Ocurrio un error:" +e.getMessahge());
            System.out.println() 
        }
    
        private static void Mostrarmenu(){
            //Mostrar el menú
        System.out.println( ***
        1. Suma
        2. Resta
        3. Multipliacionm 
        4. Division 
        5. Salir
        ***)


        }