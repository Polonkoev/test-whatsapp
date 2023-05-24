import { InputMessage } from "../../InputMessage/InputMessage";
import { useState } from "react";
import css from "./MessageBox.module.css";
import axios from "axios";
import { Notify } from "notiflix";
export const MessageBox = ({ recipient, authData }) => {
  const [inboxMessages, setInboxMessages] = useState({});
  const [inboxTimestamp, setInboxTimestamp] = useState("");
  const [currentTimestamp, setCurrentTimestamp] = useState("");

  const [messages, setMessages] = useState({});

  const [idInstance, apiTokenInstance] = authData;

  const [id, name, number] = recipient;

  const checkMessage = () => {
    axios(
      `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
    )
      .then((response) => {
        const message = response.data.body.messageData.textMessageData;
        const sender = response.data.body.senderData.sender.split("@")[0];
        const inboxTimestamp = response.data.body.timestamp;
        setInboxTimestamp(inboxTimestamp);
        console.log(inboxTimestamp);
        console.log(sender);
        console.log(response.data);
        setInboxMessages((prevInboxMessages) => ({
          ...prevInboxMessages,
          [sender]: [...(prevInboxMessages[sender] || []), message],
        }));
        Notify.success("Обновлено!");
      })
      .catch((error) => {
        console.error(error);
        Notify.failure("Ошибка!");
      });
  };

  const setOutboxMessage = (message) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [number]: [...(prevMessages[number] || []), message],
    }));
    setCurrentTimestamp(Math.floor(Date.now() / 1000));
  };

  return (
    <>
      {/* <div className={css.container}>
        <button onClick={() => checkMessage()}>Обновить</button>
        <ul className={css.list}>
          {(inboxMessages[number] || []).map((message, index) => (
            <li key={`inbox-${index}`} className={css.inbox}>
              <p className={css.inboxMessage}>{message.textMessage}</p>
            </li>
          ))}
          {(messages[number] || []).map((message, index) => (
            <li key={`outbox-${index}`} className={css.outbox}>
              <p className={css.outboxMessage}>{message}</p>
            </li>
          ))}
        </ul>
      </div> */}

      <div className={css.container}>
        <button onClick={() => checkMessage()}>Обновить</button>
        <ul className={css.list}>
          {inboxTimestamp > currentTimestamp
            ? (inboxMessages[number] || []).map((inboxMessage, index) => (
                <li key={`inbox-${index}`} className={css.inbox}>
                  <p className={css.inboxMessage}>{inboxMessage.textMessage}</p>
                </li>
              ))
            : (messages[number] || []).map((outboxMessage, index) => (
                <li key={`outbox-${index}`} className={css.outbox}>
                  <p className={css.outboxMessage}>{outboxMessage}</p>
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
