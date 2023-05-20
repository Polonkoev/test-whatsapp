import { InputMessage } from "../InputMessage/InputMessage";
import css from "./ChatFrame.module.css";
export const ChatFrame = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <p>Получатель</p>
      </div>
      <InputMessage />
    </div>
  );
};
