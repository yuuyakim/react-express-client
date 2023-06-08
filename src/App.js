
import "./App.css";
import "./components/Button"
import { memo, useContext } from "react";
import { useCallback, useState } from "react";
import { Button } from "./components/Button";
import { ColoredMessage } from "./components/ColoredMessage";
import { EditButton } from "./components/EditButton";
import { SampleContext } from "./components/providers/SampleProvider";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = memo(() => {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers()
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
    <div>
      <h1>Users</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <Button onClickButton={onClickButton}>カウントアップ</Button>
      <Button onClickButton={onClickResetButton}>リセット</Button>
      <Button onClickButton={onClickSwitch}>管理者切り替え</Button>
      <EditButton></EditButton>
      <p>{num}</p>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {isError && <p style={{ color: "red" }}>エラー発生</p>}
      {isLoading ? (
        <p>データ取得中</p>
      ) : (
        userList.map(user => (
          <p key={user.id}>{`${user.id}:${user.name}(${user.age}歳)`}</p>
        ))
      )}
    </div>
  );
})
