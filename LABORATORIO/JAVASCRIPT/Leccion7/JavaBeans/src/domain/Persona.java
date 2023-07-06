/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package domain;

import java.io.Serializable;

/**
 *
 * @author Matias
 */
public class Persona implements Serializable{
 private String nombre;
 private String apellido;
 
 // Debe tener un constructor vacio para que sea Javabeans
 public Persona(){
 }
  
  public Persona (String nombre, String apellido){
   this.nombre = nombre;
   this.apellido = apellido;
  }  

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + ", apellido=" + apellido + '}';
    }
}
