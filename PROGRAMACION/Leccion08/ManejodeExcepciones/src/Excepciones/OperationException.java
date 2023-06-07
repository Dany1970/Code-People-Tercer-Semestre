/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Excepciones;

/**
 *
 * @author Matias
 */
public class OperationException extends Exception{
    //Agregamos un constructor
    public OperationException(String mensaje){
        super(mensaje); 
    }
}
