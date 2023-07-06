
package accesodatos;

public class ImplentacionOracle implements IAccesoDatos {

    @Override
    public void insertar() {
        System.out.println("Insertar desde Oracles");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde Oracles");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde Oracles");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar desde Oracles");
    }
    
}
