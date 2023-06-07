import { memo } from "react";

export const Button = memo(({ onClickButton, children }) => {

  return (
      <button onClick={onClickButton}>{children}</button>
  );
})
