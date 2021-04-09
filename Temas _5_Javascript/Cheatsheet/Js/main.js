/*------------------Uso de Js externo------------ */
function saludo() {
    alert("hola desde un elemento externo")
    console.log("has hecho click");
}
// document.getElementsByTagName("a").item(2).addEventListener("click", saludo);




/*------------------depuracion 7 logging---------------*/
// alert("mensaje");
console.log("mensaje");


/*------------------Variables---------------*/


/*var -> funtion scope
/let / const -> block scope*/

function saludar() {
    console.log("inicial: ", contador);

    for (var contador = 0; contador < 3; contador++) {
        console.log(contador);
    }
    console.log("final: ", contador);
}

saludar();


/*Inicializacion */

let day;
day = 5;

let monthname = "octubre";

let hour, minute, second;

let array = [15, 20, 25]
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; //avanzada
console.log(var1, var2, var3);

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
console.log(typeof bool, typeof bool2, typeof true, typeof "true");


let undef;
console.log(undef, typeof undef);

let selectedColor = null; /* se utuliza para limpiar variables*/
console.log(selectedColor, typeof selectedColor);


/*Objects */
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(typeof array, typeof array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("20021-05-12"));
console.log(typeof new Error("Mensaje de Error"));


/*------------------Srings---------------*/

str = "Hola Futuro";
console.log(str, str.length);
console.log(str.indexOf("Futuro"), str.indexOf("cadena no presente"));
console.log("la ultima ocurrencia de `u` esta en el indice", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("Hola Mundo".concat(" .Adios mundo"));
console.log("Hola mundo" + ". Adios mundo.");
str = str + ". Adios Mundo.";
str += ". Adios Mundo.";
console.log(str);


console.log(str.replace("mundo", "futuro"));
console.log(str.replaceAll("mundo", "futuro"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El dia de mi cumpleaños es ${day}`); // String template
console.log("El dia de mi cumpleaños es", day, ".");

//PARSING  (parseo) (cambia de tipo a un dato)

let number = Number("1000"); // number ("adjasd") si imprime NaN es porque no es un numero
console.log(number, typeof number);

number += "1000"; // Entiende que es una concatenacion, no una suma
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);



//----------Objects-----------

let person = {
    name: "jhon",
    age: 30,
    blonde: false, // ultimo key sin coma siempre
    jump() {
        console.log("HEY ESTOY SALTANDO.")
    },
    presentarse() {
        console.log(`me llamo ${this.name},tengo ${this.age} y ${this.blonde ? `soy rubio` : `soy moreno.`}`);
    }  
}

person.presentarse()
//Acceso por punto / Dot rotation

console.log(person);
console.log(`se llama  ${person.name} y tiene ${person.age} años`);

person.name = "Jane";// esta sobreescribiendo person y name 
person.age = 20;

console.log(person);
console.log(`se llama  ${person.name} y tiene ${person.age} años`);

//Acceso por corchetes / Brackets notation

let propertyName = "age"; // property name es la propiedad que yo creo que puede cambiar como yo quiera
console.log(person[propertyName]);


//Ampliacion añadir propiedades una vez ya creadas
person.children = ["Martha ", "Peter"];
console.log(person);
//para saber el nombre de los hijos childre
console.log(person.children[1], person.children[0]);


person.jump();

console.log(typeof {}, typeof [], typeof ""); // objeto , objeto ,string

// This
const person2 = {
    name: "Thomas",
    talk() {
        console.log(this);
        console.log(`me llamo ${this.name}`);  //poner this es como poner person2
    }
}
const person3 = {
    name: "Sarah",
    talk() {
        console.log(this);
        console.log(`me llamo ${this.name}`);  //poner this es como poner person2
    }
}
person2.talk();
person3.talk();

//Copiar Objetos

let obj1 = {property: 5};
let obj2 = obj1; //No es una copia, es el mismo con dos nombres

obj2 = {...obj1}; // Copia superficial que usaremos casi sieempre
obj2 = JSON.parse(JSON.stringify(obj1)); // Copia profunda total





//Object Constructor using functions

function Car(brand, color, weight, topSpeed){
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function() {
        return `This ${this.color} ${this.brand} weigths ${this.weight}`+
        `kilos and can reach up to ${this.topSpeed} kms/h.`;
    }
}

const car1 = new Car("mercedes","red",undefined, 200);
const car2 = new Car("volvo","white",2500,180);
const car3 = new Car("volkswagen","blue",1500,174);

console.log(car1,car2,car3);

console.log(car2.weight);

console.log(car3.getDescription());



//--------------Arrays---------------//
let selectedColors = ["red", "blue"]; //array de strings
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green"; // si no existe lo crea
console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white"); // Push añade un elemento
console.log(selectedColors, selectedColors.length);

let removedItem = selectedColors.pop(); //removedcolors te guarda el elemento depues de eliminado po si lo neceistas
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white") //añade un elemento al inicio
console.log(selectedColors, selectedColors.length);

selectedColors.shift() //elimina un elemento al inicio
console.log(selectedColors, selectedColors.length);

selectedColors.sort(); //ordena de forma alfabetica
console.log(selectedColors, selectedColors.length);

console.log(selectedColors.indexOf("red")); //lo busca y me indica el indice del elemnto

console.log(selectedColors[selectedColors.indexOf("red") + 1]); //como buscar el color despues del rojo

console.log(selectedColors.slice(1, 3)); //te devuelve el elemnto uno hasta el 3 sin contar el tres

console.log(selectedColors);

selectedColors.splice(1, 1); //elimina solo un elemento
console.log("los elementos borrados son: ", selectedColors.splice(1, 2));
console.log("el array de ha quedado asi:", selectedColors);

/* Crear un objeto `nino` que tenga las porpiedades nombre altura genero y amigos, 
Amigos estara inicielamente vacio y añadiremos posteriormente 3 elementos con los nombres. 
depues, añadiremos uno extra al inicio*/


let niño = {
    name: "Pedro",
    genero: "masculino",
    altura: 1.70,
    age: 30,
    amigos: [],


    lostfriends() {               //funcion creada para perder un amigo
           this.amigos.pop()     
        }
    
}


niño.amigos.push("lucia", "juan", "sancho");
niño.amigos.unshift("esmeregildo");
console.log(niño);

niño.lostfriends();
console.log(niño);

//------------------Condicionales----------------/

const randomNumber =9;
const guessedNumber = "5";

if (randomNumber === guessedNumber) {
    console.log("has acertado el numero");

}    else if(randomNumber > guessedNumber){
    console.log("el numero secreto es mayor");

}    else {
    console.log("el numero secreto es menor");    
}

//ternary operator  (if else en una linea)   (condicion ? expresion cierta o expresion falsa)

let variable = 12 < 10 ? "el primero es menor" : " el primero es mayor";
console.log(variable);

//switch
let option = 3;
switch (option){
    case 1:
        //bloque de codigo
        console.log("option vale  1");
        break;
    case 2:
        //bloque de codigo para opcion 2
        console.log("opcion vale 2");  
        break;
        //bloque de codigo para opcion 3
    case 3:
        console.log("opcion vale 3");
        break;
    default: //de otro modo de PSeint
        console.log("otra opcion");
        break;      
}

/*-------------------FUNCIONES-------------*/
//Nombradas

function greet(name, lastName){
    console.log(`hola, ${name} ${lastName}. ¿Que tal?`);
}

greet();
greet("Marcos", "Aurelio");

//que devuelva el cuadrado de un numero
//forma generica
function square (number){
    return number * number;
}
console.log(square(7));

//higher order Functions
//map

let arr1 = [1,2,3];
let arr2 = [];

for (let num of arr1){
    arr2.push
}



arr1=[1,2,3];
arr2 = arr1.map(item => item *2);

console.log("resultado con map: ", arra1,arr2);

//a partir de un array con años de nacimiento calcular las edades
const birthYears = [1980, 1990,1975, 1970];
const ages = birthYears.map(year => 2021 - year);
console.log(ages);


//filter


const prices = [150,50,49,51,15,237];
const expensives = prices.filter(price => price >=50);
console.log(expensives);

const cars = [
    {
        brand :"bmw",
        year: 2010,
        plateNumber: "HGTI23"

    },
    {
        brand :"MERDECES",
        year: 1990,
        plateNumber: "FDSFD23"

    },
    {
        brand :"VOLVO",
        year: 2021,
        plateNumber: "HGTI323"

    },
];

console.log(cars.filter(car=> car.plateNumber === "HGTI23"));

//cars = [ "bmw", "mercedes", "volvo"]

console.log(cars.map(car => car.brand));


//sort pertenece solo a los arrays
console.log(cars);

cars.sort((car1, car2) => car1.year - car2.year);

console.log(cars);




// Funciones Anonimas

// const saludar = function () {console.log("hello");};

//--------------ordena numeros------------------/-

let numbersArray = [5, 51, 1, 15];
console.log(numbersArray);
numbersArray.sort(); //me ordena segun ASCII
console.log(numbersArray);



function orderNumbers (a,b){
    if (a < b) {
        return -1;

    }else if (a === b){
        return 0;

    }else{
        return 1;
    }
}


numbersArray.sort(function (a,b) {return a - b });
numbersArray.sort(orderNumbers)
console.log(numbersArray);



//-----funciones de flecha---------//


const perimeterSquare = (side) => side*4;

console.log(perimeterSquare(5));


// console.log(typeof function () {}); //funcion
// console.log(typeof (()=> {})); //funcion

//------------------de una funcion anonima normal a una de flecha----------------------//

let perimeterOfSquare = function (side) { // Función anónima normal
    return side * 4;
    }
    perimeterOfSquare = function (side) {return side * 4;} // (opcional) Una única línea
    perimeterOfSquare = (side) => {return side * 4;} // Sustituyo function por la flecha después de params.
    perimeterOfSquare = (side) => side * 4; // Si sólo quiero devolver algo, quito llaves y return.
    perimeterOfSquare = side => side * 4; // Si sólo tiene 1 param, puedo quitar paréntesis.
    
    console.log(perimeterOfSquare(5));


    //Como transformar una funcion anonima en uan de flecha
    numbersArray.sort(function(a,b) {return a - b}); //--->

    numbersArray.sort((a,b) => b - a);
    console.log(numbersArray);


//-----------Bucles----------------//

//------------For------------------//
//i++ = i=i+1

for (let i = 0; i <= 10; i++) {
    console.log(`indice: ${i}`);
}

//definir y rellenar un array con el indice i


for (let i = 0; i <= 10; i++) {
    console.log(`indice: ${i}`);
}

let arrayE = [];

for (let i = 0; i <= 10; i++) {
    arrayE.push(i); 
}

console.log(arrayE); //IMPRIME DEL 0 AL 10



//---------WHILE-----------// CUANDO NO SE SABE EL NUMERO DE REPETICIONES

let contador = 0;

while (contador <= 10) {

    console.log(contador);

    contador++;
}

while(true) {  //bucle infinito
    break;
}

console.log("no entra en el bucle infinito");

//-----------FOR EACH----------------//
// Se aplica a cada elemento dentro del array

console.log(numbersArray);
numbersArray.forEach(function (value,index) {
    console.log(`indice ${index}: ${value}`);
});


numbersArray.forEach((value,index) => console.log (`indice ${index}: ${value}`)); 


let otherArray = [];

numbersArray.forEach(item => otherArray.push(item)); //asignamos elementos del numbersArray dentro del nuevo otherArray

console.log(otherArray);


//---------FOR OF----------//

for (let item of numbersArray){
    console.log(item);
}


//CONTINUE
for (let i = 0; i < 5; i++){
    if (i===3){//se salta el 3
        continue
    }
    console.log(" using continue  ",i);
}

//BREAK
let i=0;
let k;


mainLoop: while(true){ //mainLoop etiqueta creadad para romper el bucle que queramos
    console.log("outer loop", i);
    i++;
    k = 1;
    while(true){
        console.log("inner loop", k);
        k++
        if (i === 5 && k === 5){
            break mainLoop;
        }else if (k === 5){
            break;
        }
    }
}




//-----------DOM-(document model object)-----------//
//Basics
console.log(document);
console.log(document.domain)
console.log(document.URL);
document.title += "(DOM)"; // MODIFICA EL TITULO DEL DOCUMENTO
console.log(document.title);

//Selectors
const family = document.getElementsByTagName("div");
console.log(family);

// array.from(family).forEach (item=> console.log(item)); //construyo un array con from
// for (let familyMember of family){
//     console.log(familyMember);
// }

const grandParent = document.getElementById("grandParent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent");
const parent1 = parents[0]; //accedo al array 0 de parents y los guardo en una variable

const parent2 = document.getElementsByClassName("parent")[1];

const children = document.getElementsByClassName("child");
console.log(parent1,parent2);

// query selector

let element = document.querySelector(".grandParent div");
console.log(element);

parent1.style.backgroundColor = "#333"; //cambiar color directamente de js

grandParent.style.backgroundColor ="#dddd"; //cambiar color directamente a gris


// parents[1].parentNode.style.backgroundColor = "#333";


const changeBackground = (element,color) => element.style.backgroundColor = color;

changeBackground(parents[0],"green");
changeBackground(parent2.children[1], "blue");
changeBackground(children[1].parentNode.parentNode, "red");
changeBackground(grandParent.children[1].previousElementSibling.lastElementChild, "yellow");

//PROPIEDADES / PROPERTIES

console.log(children[2].innerHTML);
console.log(children[2].textContent);

console.log("Classlist: ", parent1.classList);
parent1.classList.remove("bg-dark");
parent1.classList.add("bg-red");
console.log("Classlist: ", parent1.classList);

parent1.classList.toggle("bg-red"); //alterna la clase, si no la tiene la incluye
                                    //si está, la elimina

parent1.setAttribute("name", "nombre-del-parent-1"); //cambia o sustutiye atributos como class, name del html

//Create /remove elements

let myDiv = document.createElement("div");  //crea un elemento en el html en este caso un div
myDiv.id = "new-div"; // crea nuevo div
myDiv.classList.add("child");//crea clase dentro del nuevo div
myDiv.textContent = "child 2.5"; //crea texto dentro del nuevo div

let myDiv2 = myDiv;

parent2.appendChild(myDiv2);
parent1.appendChild(myDiv); //mismo div con distintos nombres


myDiv2 = myDiv.cloneNode(true); //creamos un nuevo nodo a partir del original con true copia todo
parent2.appendChild(myDiv2);    //con false solo clona la etiqueta

myDiv2.textContent = "child 5";

myDiv.remove();

let MyDiv3 = myDiv.cloneNode(true);//creo variable y clono div
parent2.before(MyDiv3);
parent2.after(myDiv.cloneNode(true))


//crear una funcion que me devuelva un nodo nuevo y queme devuelva etiqueta e id

function createNode(label,id){
    let newNode = document.createElement(label);
    newNode.id = id;

    return newNode;
}

let newDive = createNode("div", "identificadador1");
let link = createNode("a", "mainLink");

link.textContent = "texto de enlace";
link.setAttribute("href", "https://google.com")

grandParent.appendChild(link);



//Events

const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click",function (event){
    // console.log(event);
    // console.log(event.target);
    // document.body.classList.toggle("bg-red");
    // console.log(event.target.tagName);

    if (event.ctrlKey){
        document.body.classList.toggle("bg-red");
    }
    console.log(`x: ${event.clientX} | y: ${event.clientY}`);
    console.log(`Alt: ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`);
});

const emailInput = document.querySelector("#emailInput"); //queryselector  y el selector por ID te devuelven el elemto directo
emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);

function inputListener (e) {
    console.log("Tipo de evento", e.type)

    // if (e.type === "focus") {
    //     e.target.classList.add("bg-red"); 

    // }else if (e.type === "blur"){
    //     e.target.classList.remove("bg-blue");
    // }
   
}

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value;// seleccionames el texto del titulo y lo igualamos al avalor del emailinput

}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

function coords(e){
    document.querySelectorAll("h1")[3].textContent = `x: ${e.clientX} | y: ${e.clientY}`;
}

document.body.addEventListener("mousemove", coords);


