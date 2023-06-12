/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aritmetica;

/**
 *
 * @author Matias
 */
import Excepciones.OperationException;

public class Aritmetica {
    public static int division(int numerador, int denominador)
            throws OperationException {
        if(denominador == 0){
            throw new OperationException("División entre cero");
        }
        return numerador / denominador;
    }
    
}
