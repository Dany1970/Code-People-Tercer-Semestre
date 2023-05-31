
package accesodatos;

public interface IAccesoDatos {
    int MAX_REGISTRO = 10; //Si declaro el atributo dentro de la interface debo darle valor
    
    //Metodo insertar es abstracto y sin cuerpo
    void insertar();
    
    void listar();
    
    void actualizar();
    
    void eliminar();
}
