//1 define e i nicializa un array con 5 elementos string e nuna sola linea.
const stringArray = ["1","2","3","4","5"];
console.log(stringArray);

// 2 Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por 
// completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array 
// entero por consola utilizando un string template del tipo: `Longitud: ${}


const arrayNumber = [];
console.log(`la longitud del array es,  ${arrayNumber.length}`);
console.log(arrayNumber);

arrayNumber.push = (12,84,56);
console.log(`la longitud del array es,  ${arrayNumber.length}`);
console.log(arrayNumber);

arrayNumber.shift();
console.log(`la longitud del array es,  ${arrayNumber.length}`);
console.log(arrayNumber);

arrayNumber.unshift = (45,89);
console.log(`la longitud del array es,  ${arrayNumber.length}`);
console.log(arrayNumber);

// 3 Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en 
// caso contrario. 

function isBolean(value) {
    return typeof value === "boolean";
}
console.log(isBolean(true));
console.log(isBolean("true"));
console.log(isBolean(2));

// 4 Escribe una función que devuelva la longitud de un string recibido por argumento.

const lengthString = (string) => string.length;

console.log(lengthString("esteban"));

// 5. Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.

const minToSEg = (value) => value*60;

console.log(minToSEg(5));

// 6. Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá 
//     directamente).
function numeroPar(num){
    if (num % 2 ==0){
        return "el numero es par";
    }else{
        return num + 1;
    }
}
console.log(numeroPar(3));

    
// 7. Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes 
// obviar los años bisiestos.


const edad = (numero) => numero *365;

console.log(`has vivido ${edad(17)} dias`);

// 8. Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays 
// de diferentes longitudes.

const returnLastElement = array => array[array.length - 1];
console.log(returnLastElement([1,3,4]), returnLastElement(["hola","futuro"]));



// 9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy 
// frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función 
// recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. Ejemplo:

const countLegs = (pollos, vacas, cerdos) => pollos * 2 + vacas*4 + cerdos*4;
console.log(countLegs(6,4,10));

//otra forma

function contador(cantPollos,cantVacas,cantCerdos) {

    let = patasPollos = 2 * cantPollos;
    let = patasVacas = 4 * cantVacas;
    let = patasCerdos = 4 * cantCerdos;
    return  patasPollos + patasVacas + patasCerdos;
}

console.log(contador(6,4,10));


// 10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.

function datosIguales(a,b) {
    return (typeof a === typeof b)
    ? "los datos son del mismo tipo"
    : "los datos son diferentes"; 
}

console.log(datosIguales(5,4));
console.log(datosIguales(4,""));

// 11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una 
// palabra de la frase original. Investigar método existente de los strings para este fin.

let string1 = "La vida es bella.";

const stringSeparation = function(x) {
return x.split(" ");
}

console.log(stringSeparation(string1));

// 12. Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código 
// postal, calle, número, planta, y número de puerta.


let address1 = {
    provincia : "malaga",
    pais: "españa",
    calle: 34,
}

// 13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que 
// reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:

const parseDomain = function (x) {
    array = x.split(".");
    object = {
        Domain : array[0],
        TLD: array [1]
    }
    return object;
    
}
console.log(parseDomain("codespace.com"));

// 14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando 
// dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el 
// mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:

const strictEquality = (num1, num2) => (num1 == num2) && (typeof num1 == typeof num2);

console.log(strictEquality("5",5));
console.log(strictEquality(5,5)); 

// 15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso 
// contrario.

const sameLength = (str1,str2)=> str1.length === str2.length;
console.log(sameLength("tebas","sebas"));
console.log(sameLength("tebas","sebasa"));


// 16. Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

const emptyString = function(str) {
    return str ? false : true;
    
}
console.log(emptyString(""));
console.log(emptyString());
console.log(emptyString("algo"));

// 17. Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes: 
// • while
// • for
// • for of
// • forEach.





// 18. Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.

// 19. Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva 
// la cuenta final.

const getVoteCount = function (obj){
    return obj.upVotes - obj.downVotes;
}

const votes ={upVotes:35, downVotes:15};

console.log(getVoteCount(votes));
console.log(getVoteCount({upVotes:35, downVotes:15}));

 
// 20. Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo 
// de cada uno de los elementos.

function typeofArray(array) {
    const arrayTypes = [];

    array.forEach(element => {
        arrayTypes.push(typeof element);
    });
    return arrayTypes;
}



const testArray = ["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"];

console.log(typeofArray(testArray));


// 21. Función que dado un array de números con formato string devuelva un array con los números ya 
// parseados


function getParsedNumbers(array) {
    const parsedArray = [];

    array.forEach(element => {
        parsedArray.push(Number (element));
    });
    return parsedArray;
}


console.log(getParsedNumbers(["1.5","10","0"]));


// 22. Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o 
// igual que cero y “Negativo” en caso contrario. Usa el operador ternario.

const positivo = num => num >= 0 ? "positivo" : "negativo";
console.log(positivo(-5));
console.log(positivo(5));


// 23. Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.


 const deleteElement = (array,index) => array.splice(index,1);

//  24. Usando la función del apartado anterior, crea otra función que dado un array de números y un número a 
// filtrar, devuelva un array borrando todos las apariciones de dicho número.

const filterItem = (array,numberToFilter) => {

    array.forEach((element,index)=> {

        if(element === numberToFilter){
            
            deleteElement(array,index);
        }
    });
}

const arrayFiltered = [1,5,6,7,5]
filterItem(arrayFiltered,5);
console.log(arrayFiltered);