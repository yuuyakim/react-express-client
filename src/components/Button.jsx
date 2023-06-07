import React, { useState } from "react";

const Button = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <button onClick={onClickButton}>button</button>
      <p>{num}</p>
    </>
  );
};

export default Button;
