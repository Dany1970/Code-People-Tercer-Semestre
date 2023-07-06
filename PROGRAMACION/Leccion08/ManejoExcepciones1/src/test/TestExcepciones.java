package test;

public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try{
            resultado = 10/0;
            } catch (Exception e){
            System.out.println("Ocurrio un errror");
            e.printStackTrace(System.out);
            }
            System.out.println("La variable de resutlado tiene como valor: "+resultado);
        }
    
}
