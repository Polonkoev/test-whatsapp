import { useState } from "react";
import css from "./InputMessage.module.css";
import axios from "axios";
import { Notify } from "notiflix";
export const InputMessage = ({ authData, recipient, setOutboxMessage }) => {
  const [message, setMessage] = useState([]);

  const [id, name, number] = recipient;

  const [idInstance, apiTokenInstance] = authData;

  const sendMessage = () => {
    if (message !== "") {
      setOutboxMessage(message);
      setMessage("");

      const data = {
        chatId: `${number}@c.us`,
        message,
      };
      axios
        .post(
          `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
          data
        )
        .then((response) => {
          Notify.success("Отправлено!");
        })
        .catch((error) => {
          console.error(error);
          Notify.failure("Ошибка!");
        });
    } else {
      Notify.failure("Напишите сообщение!");
    }
  };
  function handleEnter(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <>
      {recipient !== "" ? (
        <div className={css.container}>
          <div className={css.inputWrapper}>
            <input
              className={css.input}
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => handleEnter(event)}
            />
            <button className={css.btn} onClick={sendMessage}>
              Отправить
            </button>
          </div>
        </div>
      ) : (
        <div className={css.placeholderWrapper}>
          <p className={css.inputPlaceholder}>
            Выберите контакт для отправки сообщений
          </p>
        </div>
      )}
    </>
  );
};
