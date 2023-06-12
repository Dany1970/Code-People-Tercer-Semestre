/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Test;

/**
 *
 * @author Matias
 */

import static aritmetica.Aritmetica.division;

public class TestExcepciones {
    public static void main(String[] args) {
        int resultado = 0;
        try{
            resultado = division(10, 0);
        } catch(Exception e){
            System.out.println("Ocurrió un Error");
            e.printStackTrace(System.out); //Se conoce como la pila de excepciones
            System.out.println(e.getMessage());
        }
        System.out.println("La variable resultado tiene como valor: "+resultado);
            
    }
 
