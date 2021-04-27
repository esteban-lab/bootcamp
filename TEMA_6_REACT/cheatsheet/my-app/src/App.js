
import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from "./components/counter";
import UseEffectComponent from './components/UseEffectComponent';
import {useState} from "react";
import Router from './Router';

function App() {

  const [show, setshow] = useState(false)



  return (
    <div className="App">
      {/* {show && <UseEffectComponent />}
      <button onClick={() => setshow(!show)}>Show</button> */}
     
      {/* <FirstComponent title = "Titulo enviado desde el padre" date = "16 de Agosto 2021" />
      <FirstComponent title = "otro titulo"/>
      <SecondComponent/>
      <ThirdComponent/> */}

      <Router/>
    </div>
  );
}

export default App;

