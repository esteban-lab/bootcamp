import {Fragment} from "react";
import PropTypes from "prop-types";

export default function FirstComponent(props) {
    // console.log(props.date);

    const myFunction = function (name){
        return (evento) => console.log(name, evento);
    };

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet.</p>
            <button onClick={myFunction("Marta")}>Click me!</button> 
            {/* lo que espera onClick es una funcion  */}
        </Fragment>
    )
}

FirstComponent.defaultProps = {
    // title: "Sin titulo",
    date: " Sin  fecha",
    products : [],
}


FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    products : PropTypes.array,  

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

