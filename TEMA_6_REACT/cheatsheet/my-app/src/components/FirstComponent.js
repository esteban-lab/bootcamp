import {Fragment} from "react";

export default function FirstComponent(props) {
    console.log(props.title);

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>Click me!</button>
        </Fragment>
    )
}

// export default FirstComponent
// SOLO se puede un export por archivo

function SecondComponent() {
    return(
        <>
            <h1>Soy otro componente</h1>
        </>
    )
}


function ThirdComponent() {
    return(
        <div>
            <h1>Soy otro componente</h1>
        </div>
    )
}

export {SecondComponent,ThirdComponent};