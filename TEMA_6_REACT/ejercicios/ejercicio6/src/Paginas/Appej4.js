import List from "../components/List";
import Input from "../components/Input";

function Appej4() {

  const todoo = []
  
  
  fetch('https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json')
  .then(response => response.json())
  .then(data => console.log(data));

  return (
    <div className="App">
     <h3>TO-DO LIST</h3>
     <List/>
     <Input type="text" placeholder="Introduce tu nuevo to do"/>
    </div>
  );
}

export default Appej4;
