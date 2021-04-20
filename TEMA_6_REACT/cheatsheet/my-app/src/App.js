
import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent title = "Titulo enviado desde el padre" date = "16 de Agosto 2021" />
      <FirstComponent title = "otro titulo" date ="2012" />
      <SecondComponent/>
      <ThirdComponent/>
    </div>
  );
}

export default App;

