// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var x = 12;
  var y = 11;
 if(x<=y){
     y
 }
 else{
  x
 }

}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var edad = 19;
  if(edad>18){
        "Allowed"
  }
  else{

    "Not allowed"
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var status=1;
  if(status===1){
    "Online"
  }
  if(status===2){
    "Away"
  }
  else{
    "Offline"
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var idioma="ingles";
  if(idioma=="aleman"){
    "Guten Tag!"
  }
  if(idioma=="mandarin"){
     "Ni Hoa!"
  }
  if(idioma="ingles"){
        "Hello!"
  }
  else{
    "Hola!"
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
   switch(color){
       case 'blue':
           "This is blue";
             break;
       case 'red':
           "This is red";
             break;
        case 'green':
           "This is green";
             break;
        case 'orange':
            "This is orange";
             break;
        default:
           "Color not found";
             break;
  }
}
function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var numero=10;
  if(numero===5||numero===10){
      "True"
  }
  else{
    "False"
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var numero=50;
  if(numero<50 && numero>20){
     "true"
  }
  else{
    "false"
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var numero=50.32;
  if(numero===Math.floor(numero)){
    "true"
  }
  else{
    "False"
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var numero = 15
  if(numero%3===0){
      "fizz"
  }
  if(numero%5===0){
      "buzz"
  }
  if(numero%3 && numero%5){
      "fizzbuzz"
  }
  else{
    numero
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
var num1=20, num2=6, num3=12;
if(num1>num2 && num1>num3 && num1>0){
    "Numero 1 es mayor y positivo"
  }
if(num1<0 && num2<0 && num3<0){
    "Hay negativos"
   }
if(num1===0 || num2===0 || num3===0){
       "Error"
}   
else{
  "False"
}
  
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var numero = 17;
  if(numero%numero===0 && numero%1===0){
      "True"
}
else{
  "False"
}
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  var valor=10<20;
  if(valor=true){
    "Soy verdadero"
  }
  else{
    "Soy falso"
  }

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var array= [0*6,1*6,2*6,3*6,4*6,5*6,6*6,7*6,8*6,9*6,10*6]
  //aca pones array y te aparece toda la tabla, y si no array[0] y vas de uno en uno eligiendo

}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var numero=500;

  if(numero>99){
      "true"
   }
   else{
      "False"
   }
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

  let result = "";
let i = 0;

do {
  i = i + 5;
  result = result + i;
} while (i < 40);

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
