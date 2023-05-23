import { InputMessage } from "../../InputMessage/InputMessage";
import { useEffect, useState } from "react";
import css from "./MessageBox.module.css";
export const MessageBox = ({ recipient, authData }) => {
  const [inbox, setInbox] = useState(["входящее"]);

  const [messages, setMessages] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  const [id, name, number] = recipient;

  const setOutboxMessage = (message) => {
    setIsSelected(true);
    setMessages((prevMessages) => ({
      ...prevMessages,
      [id]: [...(prevMessages[id] || []), message],
    }));
    console.log(messages);
  };

  const setInboxMessage = (message) => {
    setInbox([...inbox, message]);
  };

  return (
    <>
      <div className={css.container}>
        <ul className={css.list}>
          {inbox.map((message, index) => {
            return (
              <li key={index} className={css.inbox}>
                <p className={css.inboxMessage}>{message}</p>
              </li>
            );
          })}
        </ul>
        {
          <ul className={css.list}>
            {messages[id] &&
              messages[id].map((message, index) => {
                return (
                  <li key={index} className={css.outbox}>
                    <p className={css.outboxMessage}>{message}</p>
                  </li>
                );
              })}
          </ul>
        }
      </div>

      <InputMessage
        number={number}
        authData={authData}
        recipient={recipient}
        setOutboxMessage={setOutboxMessage}
      />
    </>
  );
};
