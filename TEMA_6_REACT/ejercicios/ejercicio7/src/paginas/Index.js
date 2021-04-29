import {useState, useEffect} from 'react';

export default function Index() {

    const [moviesData, setMoviesData] = useState({});


    const MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=285f60b8b5680682f26db4c6f7561471&language=en-US&page=1";

    useEffect(() => {
        fetch(`${MOVIES_URL}`)
        .then(response => response.json())
        .then(data => setMoviesData(data));
        
        return () => setMoviesData({});
    }, []);

    return (
        <div>
            <h1>Peliculas</h1>
            <ToDoLists toDoList = {toDoList} setToDoList = {setToDoList}/>
        </div>
    )
}