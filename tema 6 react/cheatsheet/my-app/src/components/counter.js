import {useState} from "react";

export  default function Counter() {
    // const state = useState (0);

    // const count = state[0];
    // const setCount = state[1];

    const [count,setCount] = useState(0);

    const handleClick = function (evento) {
        if (count < 10){
        setCount(count + 1);
        }
    };

    return(
        <div>
            <p>Has Hecho click {count} veces.</p>
            <button onClick={handleClick}>Hazme Click</button>
            <button onClick={()=> count > 0 && setCount(count - 1)}>Hazme Click para bajar </button>
            <button onClick={()=> setCount(0)}>Reset </button>

        </div>
    )
}