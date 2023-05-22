import { useState } from "react";
import css from "./InputMessage.module.css";
import axios from "axios";
import { Notify } from "notiflix";
export const InputMessage = ({ authData, recipient, setOutboxMessage }) => {
  const [message, setMessage] = useState([]);
  const [name, number] = recipient;
  const addMessage = (event) => {
    setMessage(event.target.value);
  };

  const [idInstance, apiTokenInstance] = authData;

  const sendMessage = () => {
    if (message !== "") {
      setOutboxMessage(message);
      setMessage("");
    }

    // const data = {
    //   chatId: `${number}@c.us`,
    //   message,
    // };
    //   axios
    //     .post(
    //       `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
    //       data
    //     )
    //     .then((response) => {
    //       console.log(response.data);

    //       Notify.success("Отправлено!");
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       Notify.failure("Ошибка!");
    //     });
    // } else {
    //   Notify.failure("Напишите сообщение!");
    // }
  };
  return (
    <>
      <div className={css.container}>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
            type="text"
            value={message}
            onChange={addMessage}

            // onKeyDown={}
          />
          <button className={css.btn} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

//TODO: Добавить соообщения во фрейм с сообщениями
