//while
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

//do while
let conteo = 0;
do {
    console.log(conteo);
    conteo++;
}while(conteo < 3);
console.log("Fin del ciclo do while");

//ciclo for
for(let contando = 0; contando < 3; contando++){
    console.log(contando);
}
console.log("Fin del ciclo for");

//Palabra reservada break
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando);
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer numero Par");
// Palabra reservada continue
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue; // ir a la siguiente iteration (ignora los numeros impares)
    }
    console.log(contando);
}
console.log("Termina el ciclo ");

//Etiquetas Lebels es recomendada no utilizarla
inicio:
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue inicio; // ir a la siguiente iteration (ignora los numeros impares)
    }
    console.log(contando);
}
console.log("Termina el ciclo ");


//Ejercicio para asistencia  CICLO WHILE Nicolas Calvo// 

//Imprimir 5 numeros del 1 al 5 Python//
 let maximo=5;
 let contador=0;
 while ( contador <= maximo) {
   console.log(contador)
   contador + 1
  }

  // Cuadrado de un numero JAVA//
  let numero, cuadrado;
  console.log("Digite un número :");
  numero =Interger.parseIny(prompt);
  while (numero >=0) {
    cuadrado= (int)Math.pow(numero,2);
    console.log ("El número" +numero+"elevado al cuadrado es " +cuadrado);
    console.log ("Digite otro numero:");
    numero = Interger.parseInt(prompt);}
    consolelog("El programa a finalizado por número negativo");
