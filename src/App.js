
import "./App.css";
import "./components/Button"
import { memo, useContext } from "react";
import { useCallback, useState } from "react";
import { Button } from "./components/Button";
import { ColoredMessage } from "./components/ColoredMessage";
import { EditButton } from "./components/EditButton";
import { SampleContext } from "./components/providers/SampleProvider";

export const App = memo(() => {
  const { isAdmin, setIsAdmin } = useContext(SampleContext)
  const [num, setNum] = useState(0);

  const onClickButton = useCallback(() => {
    setNum((num) => num + 1);
  }, []);

  const onClickResetButton = useCallback(() => {
    setNum(0);
  }, []);

  const onClickSwitch = useCallback(() => { setIsAdmin(!isAdmin)})

  return (
    <div classname="App">
      <h1>Users</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <Button onClickButton={onClickButton}>カウントアップ</Button>
      <Button onClickButton={onClickResetButton}>リセット</Button>
      <Button onClickButton={onClickSwitch}>管理者切り替え</Button>
      <EditButton></EditButton>
      <p>{num}</p>
    </div>
  );
})
