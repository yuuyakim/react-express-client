
import "./App.css";
import "./components/Button"
import Button from "./components/Button";
import { ColoredMessage } from "./components/ColoredMessage";

const App = () => {

  return (
    <div classname="App">
      <h1>Users</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <Button></Button>
    </div>
  );
};

export default App;
