import { MessageBox } from "./MessageBox/MessageBox";
import { InputMessage } from "../InputMessage/InputMessage";
import css from "./ChatFrame.module.css";
export const ChatFrame = ({ recipient, authData }) => {
  const [name, number] = recipient;
  return (
    <div className={css.container}>
      <div className={css.header}>
        <p className={css.recipientTitle}> {name}</p>
      </div>
      <MessageBox recipient={recipient} authData={authData} />
    </div>
  );
};
