import { MessageBox } from "./MessageBox/MessageBox";
import { InputMessage } from "../InputMessage/InputMessage";
import css from "./ChatFrame.module.css";

export const ChatFrame = ({ recipient, authData, isLogin }) => {
  const [id, name, number] = recipient;

  return (
    <div className={css.container}>
      <div className={css.header}>
        {isLogin ? (
          <p className={css.recipientTitle}> {name}</p>
        ) : (
          <p>Пожалуйста авторизуйтесь для отправки сообщений!</p>
        )}
      </div>

      {isLogin ? (
        <MessageBox
          recipient={recipient}
          authData={authData}
          isLogin={isLogin}
        />
      ) : (
        <div className={css.inputPlaceholder}>
          <p>Пожалуйста авторизуйтесь для отправки сообщений!</p>
        </div>
      )}
    </div>
  );
};
