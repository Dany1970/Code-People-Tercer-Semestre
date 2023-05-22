
package paquete1;


class Clase2{
    String atributoDefault = "Valor del atributo default";
    
    //Clase2(){
        //System.out.println("Constructor Default");
    //}
    
    public Clase2(){
        super();
        this.atributoDefault = "Modificación del atributo default";
        System.out.println("atributoDefault" + this.atributoDefault);
        this.metodoDefault();
    } 
    
   void metodoDafault(){
        System.out.println("Método Default");
    }   

    private void metodoDefault() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
