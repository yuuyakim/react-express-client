
import "./App.css";
import "./components/Button"
import { memo } from "react";
import { useCallback, useState } from "react";
import { Button } from "./components/Button";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = memo(() => {
  console.log("hog")
  const [num, setNum] = useState(0);

  const onClickButton = useCallback(() => {
    setNum((num) => num + 1);
  }, []);

  const onClickResetButton = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <div classname="App">
      <h1>Users</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <Button onClickButton={onClickButton}>カウントアップ</Button>
      <Button onClickButton={onClickResetButton}>リセット</Button>
      <p>{num}</p>
    </div>
  );
})
