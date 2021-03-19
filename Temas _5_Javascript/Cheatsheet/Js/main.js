/*------------------Uso de Js externo------------ */
function saludo (){
    alert ("hola desde un elemento externo")
    console.log("has hecho click");
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);




/*------------------depuracion 7 logging---------------*/
// alert("mensaje");
console.log("mensaje");


/*------------------Variables---------------*/


/*var -> funtion scope
/let / const -> block scope*/

function saludar() {
    console.log("inicial: ", contador);

    for (var contador = 0; contador < 3 ; contador++ ) {
        console.log(contador);
    }
    console.log("final: ", contador);
}

saludar();

console.clear();
/*Inicializacion */

let day;
day = 5;

let monthname = "octubre";

let hour, minute, second;

let array = [15, 20, 25]
console.log (array[0], array[1], array[2]);

let [var1,var2,var3] = [15,20,25]; //avanzada
console.log(var1,var2,var3);

// const -> bloack scope
const x = 1;

// x = 2; //error : invalid assigment to const "x"



/*------------------tipos de  datos---------------*/

let str = String("i m  a string");
let str2 = "i m another string";
console.log(typeof str, typeof str2, typeof "");



let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");

// let str = "string" es igual a "string"

let bool = Boolean(true); /*datos buleanos*/ 
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof"true");


let undef;
console.log(undef, typeof undef);

let selectedColor = null; /* se utuliza para limpiar variables*/
console.log(selectedColor , typeof selectedColor);


/*Objects */
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(typeof array, typeof array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("20021-05-12"));
console.log(typeof new Error("Mensaje de Error"));

console.clear();
/*------------------Srings---------------*/

str  = "Hola Futuro";
console.log(str, str.length);
console.log(str.indexOf("Futuro"), str.indexOf("cadena no presente"));
console.log("la ultima ocurrencia de `u` esta en el indice", str.lastIndexOf("u"));

console.log(str.substring(1,3));

console.log("Hola Mundo" .concat(" .Adios mundo"));
console.log("Hola mundo" + ". Adios mundo.");
str = str + ". Adios Mundo.";
str += ". Adios Mundo.";
console.log(str);


console.log(str.replace("mundo", "futuro"));
console.log(str.replaceAll ("mundo", "futuro"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El dia de mi cumpleaños es ${day}`); // String template
console.log("El dia de mi cumpleaños es", day, "."); 

//PARSING  (parseo) (cambia de tipo a un dato)

 let number = Number ("1000"); // number ("adjasd") si imprime NaN es porque no es un numero
 console.log(number,typeof number);

number += "1000"; // Entiende que es una concatenacion, no una suma
console.log(number, typeof number);

console.log("1" +1, "1" - 1);



//----------Objects-----------

let person = {
    name : "jhon",
    age: 30,
    blonde: false, // ultimo key sin coma siempre
    jump() {
        console.log("HEY ESTOY SALTANDO.")
    }
}

//Acceso por punto / Dot rotation

console.log(person);
console.log(`se llama  ${person.name} y tiene ${person.age} años`);

person.name = "Jane";// esta sobre escribiendo person y name 
person.age = 20;

console.log(person);
console.log(`se llama  ${person.name} y tiene ${person.age} años`);

//Acceso por corchetes / Brackets notation

let propertyName = "age"; // property name es la propiedad que yo creo que puede cambiar como yo quiera
console.log(person [propertyName]);


//Ampliacion añadir propiedades una vez ya creadas
person.children = ["Martha ", "Peter"];
console.log(person);
//para saber el nombre de los hijos childre
console.log(person.children[1], person.children[0]); 


person.jump();

console.log(typeof {}, typeof [], typeof ""); // objeto , objeto ,string







