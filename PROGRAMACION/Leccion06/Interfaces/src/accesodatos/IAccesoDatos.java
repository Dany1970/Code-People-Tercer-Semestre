package accesodatos;

//A diferencia de una clase, tenemos la palabra interface
//En Java, creamos un nuevo tipo, al no ser una clase, no estamos heredando de la clase 
//Object. Se puede extender de otra interface, en decir, es algo similar a la herencia
public interface IAccesoDatos {
    int MAX_REGISTRO = 10; //Al declarar un atributo en una interface, hay que asignarle un valor obligatoriamente
    //Una interface no tiene constructores, va a tener métodos, todos abstractos
    
    //Método insertar es abstracto y sin cuerpo
    void insertar();
    
    void listar();
    
    void actualizar();
    
    void eliminar();
   
    
}
