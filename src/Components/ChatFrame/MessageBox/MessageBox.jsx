import { InputMessage } from "../../InputMessage/InputMessage";
import { useEffect, useState } from "react";
import css from "./MessageBox.module.css";
import axios from "axios";
import { Notify } from "notiflix";
export const MessageBox = ({ recipient, authData, isLogin }) => {
  const [currentTimestamp, setCurrentTimestamp] = useState("");

  const [messages, setMessages] = useState({});

  useEffect(() => {
    if (isLogin) {
      const interval = setInterval(checkMessage, 10000);

      return () => clearInterval(interval);
    }
  }, [isLogin]);

  const [idInstance, apiTokenInstance] = authData;

  const [id, name, number] = recipient;

  const checkMessage = () => {
    axios(
      `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
    )
      .then((response) => {
        setCurrentTimestamp(Math.floor(Date.now() / 1000));

        if (response.data !== null) {
          const message =
            response.data.body.messageData.textMessageData.textMessage;
          const inboxTimestamp = response.data.body.timestamp;
          Notify.success(`Новое сообщение от ${number}`);
          setMessages((prevMessages) => ({
            ...prevMessages,
            [number]: [
              ...(prevMessages[number] || []),
              {
                text: message,
                timestamp: inboxTimestamp,
                type: "inbox",
              },
            ],
          }));
          deleteMessage(response.data.receiptId);
        }
      })
      .catch((error) => {
        console.error(error);
        Notify.failure("Ошибка!");
      });
  };

  const deleteMessage = (id) => {
    if (id !== null) {
      axios
        .delete(
          `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}`
        )
        .then((response) => {})
        .catch((error) => {
          console.error(error);
          Notify.failure("Ошибка!");
        });
    }
  };

  const setOutboxMessage = (message) => {
    setCurrentTimestamp(Math.floor(Date.now() / 1000));
    setMessages((prevMessages) => ({
      ...prevMessages,
      [number]: [
        ...(prevMessages[number] || []),
        {
          text: message,
          timestamp: currentTimestamp,
          type: "outbox",
        },
      ],
    }));
  };

  return (
    <>
      <div className={css.container}>
        <ul className={css.list}>
          {Object.values(messages[number] || []).map((message, index) => (
            <li
              key={index}
              className={message.type === "inbox" ? css.inbox : css.outbox}
            >
              <p
                className={
                  message.type === "inbox"
                    ? css.inboxMessage
                    : css.outboxMessage
                }
              >
                {message.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {
        <InputMessage
          number={number}
          authData={authData}
          recipient={recipient}
          setOutboxMessage={setOutboxMessage}
        />
      }
    </>
  );
};
