
import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from "./components/counter";


function App() {
  return (
    <div className="App">
      <Counter />
      {/* <FirstComponent title = "Titulo enviado desde el padre" date = "16 de Agosto 2021" />
      <FirstComponent title = "otro titulo"/>
      <SecondComponent/>
      <ThirdComponent/> */}
    </div>
  );
}

export default App;

