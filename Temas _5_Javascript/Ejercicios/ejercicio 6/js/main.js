// Hacer una peticion de API de https://jsonplaceholder.typicode.com/comments
// con el array que nos llegue, iremos rellenando nuestra ul con < li>
// con los primeros 20 elementos


const URL = "https://jsonplaceholder.typicode.com/comments"

const ul = document.getElementById("ul");

function fillList(array) {
    array.slice(0, 20).forEach(element =>{
        ul.innerHTML +=`<li>${element.name}</li>`;
    });
}



function fillListEmail(array) {
    array.slice(0, 20).forEach(element =>{
        ul.innerHTML +=`<li>${element.email}</li>`;
    });
}



fetch(URL)
    .then(response => {
        console.log(response);
        if(response.ok){
            return response.json(); 
        }
        throw Error("hay algun problema con las respuesta" + response.statusText);
    })

    .then(data => {
        fillList(data);
        fillListEmail(data);
    })
    .catch(error => console.log(error));



    const URL2 = "https://jsonplaceholder.typicode.com/posts"

    const h2 = document.getElementById("div");

    function fillTitle(array) {
        array.slice(0,5).forEach(element =>{
            console.log(element);
            h2.innerHTML +=` <h2>${element.title}</h2><p>${element.body}</p>`;
        });
    }



    fetch(URL2)
    .then(response => {
        console.log(response);
        if(response.ok){
            return response.json(); 
        }
        throw Error("hay algun problema con las respuesta" + response.statusText);
    })

    .then(data => {
        fillTitle(data);
    })
    .catch(error => console.log(error));
