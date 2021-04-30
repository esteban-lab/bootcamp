import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card
        title ="titulo 1"
        paragraph = "sad asd as"
        href = "https://google.com"
        linkText ="Mas informacion"
        imgUrl ="https://i.pinimg.com/originals/b5/75/bd/b575bd4aee30a58ec0cd6424efb66b31.jpg"
      />
      <Card
        title ="titulo 2"
        paragraph = "sad asd as asdasd dasdasdasd"
        href = "https://google.com"
        linkText ="Mas informacion"
        imgUrl ="https://i.pinimg.com/originals/b5/75/bd/b575bd4aee30a58ec0cd6424efb66b31.jpg"
      />
    </div>
  );
}


export default App;