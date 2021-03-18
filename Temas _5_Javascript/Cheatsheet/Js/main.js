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


console.clear();
/*------------------tipos de  datos---------------*/

let str = String("i m  a string");
let str2 = "i m another string";
console.log(typeof str, typeof str2, typeof "");



let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");

// let str = "string" es igual a "string"
