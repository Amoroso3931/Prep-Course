// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password; 
  }
  Usuario.prototype.saludar = function(){
    return "Hola mi nombre es " + this.nombre;
  }
  var usuario1 = new Usuario("Tomas", "Tomi@gmail.com", 1234);
  var usuario2 = new Usuario("Leon", "Leon@gmail.com", 4321);

  console.log(usuario1.saludar());
  console.log(usuario2.saludar());
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  agregarMetodoPrototype = {}
  agregarMetodoPrototype.prototype.saludar = function(){
    return "Hola world!"
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
 
   
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio ) {
     this.nombre = nombre;
     this.apellido = apellido;
     this.edad = edad;
     this.domicilio = domicilio;
     this.detalle = function(){
      return "Mi nombre y apellido es "+this.nombre+" "+this.apellido+" tengo "+this.edad+" años y vivo en "+this.domicilio;
     } 
     var persona1 = new Persona("Tomas","Amoroso",18,"Saavedra 123");
     console.log(persona1.detalle());
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var persona2 = new Persona("Leon","Benitez",32,"Saavedra 345");
  console.log(persona2.detalle());
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
