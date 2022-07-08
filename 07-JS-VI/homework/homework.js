// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  function hola(usuario) {
    return "Hola "+usuario+"!";
  }
  function adios(usuario) {
    return "Chau "+usuario+"!";
  }
  function saludo(usuario, cb) {
    return cb(usuario);
  }
  saludo("Tomas", hola);
  saludo("Tomas",adios);
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  function numero(n1,n2){
    return "La suma es "+n1+"+"+n2+"="+n1+n2;
  }
  function resultado(n1,n2,cb){
    return cb(n1,n2);
  }
  resultado(3,4,numero);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var nums = [1,2,3,4,5];
  var suma = num.reduce(function(acumulador, elemento) {
      return acumulador+elemento;
  }, 0);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  var nombres = ["tomas","leon","miguel","gonza"];
  nombre.forEach(function(elemento,indice) {
    console.log(elemento); 
  });
function MostrarNombres(elemento) {
    console.log(elemento)
  }
  nombre.forEach(MostrarNombres);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var numero = [1,2,3,4];
  function MultiplicadoPorDos(elemento) {
    return elemento * 2;
  }
  const dos = numero.map(MultiplicadoPorDos);
  console.log(dos);
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
