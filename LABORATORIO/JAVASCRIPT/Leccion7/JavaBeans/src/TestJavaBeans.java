
import domain.Persona;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Matias
 */
public class TestJavaBeans {
    public static void main (String[]args){
        Persona persona = new Persona ();
        persona.setNombre ("Juan");
        persona.setApellido ("Perez");
        System.out.println("persona = " + persona);
        System.out.println("persona nombre: " + persona.getNombre());
        System.out.println("Persona apellido: " + persona.getApellido());
        
    }
    
}
