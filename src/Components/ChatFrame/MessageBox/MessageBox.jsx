import { InputMessage } from "../../InputMessage/InputMessage";
import { useState } from "react";
import css from "./MessageBox.module.css";
export const MessageBox = ({ recipient, authData }) => {
  const [inbox, setInbox] = useState(["входящее"]);
  const [outbox, setOutbox] = useState(["исходящее"]);

  const [name, number] = recipient;
  const setInboxMessage = (message) => {
    setInbox([...inbox, message]);
  };
  const setOutboxMessage = (message) => {
    const newMessage = message;
    setOutbox((prevOutbox) => [...prevOutbox, newMessage]);
    console.log(outbox);
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
        <ul className={css.list}>
          {outbox.map((message, index) => {
            return (
              <li key={index} className={css.outbox}>
                <p className={css.outboxMessage}>{message}</p>
              </li>
            );
          })}
        </ul>
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
