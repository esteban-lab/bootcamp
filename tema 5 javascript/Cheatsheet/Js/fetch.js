const URL = "https://jsonplaceholder.typicode.com/users";

     
const printAddress = array => array.forEach(user => console.log(user.address.city));    
const printName = array =>array.forEach(user => console.log(user.name));
const printLats = array => array.forEach(user => console.log(user.address.geo.lat));


// fetch(URL).then (r => r.json()).then(data => console.log(data)); la forma mas corta de hacer una peticion

fetch(URL)
    .then(response => {
        console.log(response);
        if(response.ok){
            return response.json(); //no necesita else porque return para la funcion.
        }
        throw Error("hay algun problema con las respuesta" + response.statusText);
    })

    .then(data => {
        printAddress(data);
        printName(data);
        printLats(data);

    })
    .catch(error => console.log(error));
    

    //Async - await - forma alternativa
  
    async function requestURL(URL){

        console.log(1.1);
        const response = await fetch(URL);
        const data = await response.json();
        // console.log(data);
        console.log(1.2);
    }

    console.log(1);
    requestURL(URL);
    console.log(2);



//PETICION CON METODO HTTP POST EN LUGAR DE GET

const POST_URL ="https://jsonplaceholder.typicode.com/posts";


const newPost = {
    title: "mi titulo",
    body : "mi cuerpo de publicacion"

}

const http = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(newPost)
};

fetch(POST_URL, http)
    then(response => response.jason())
    then(data => console.log(data))
