import { Modal } from "../../Pages/Modal/Modal";

import { useState } from "react";
import { ChatFrame } from "../ChatFrame/ChatFrame";
import { ContactsFrame } from "../ContactsFrame/ContactsFrame";
import css from "./GeneralFrame.module.css";
export const GeneralFrame = () => {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [senderNumber, setSenderNumber] = useState("");
  const [recipient, setRecipient] = useState("");
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const authData = [idInstance, apiTokenInstance];

  const getAuthData = (id, token) => {
    setIdInstance(id);
    setApiTokenInstance(token);
  };

  const openModal = () => {
    setIsmodalOpen(true);
  };
  const closeModal = () => {
    setIsmodalOpen(false);
  };

  const addSenderNumber = (num) => {
    setSenderNumber(num);
  };
  const addRecipient = (rec) => {
    setRecipient(rec);
  };
  return (
    <>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          senderNumberProps={addSenderNumber}
          getAuthData={getAuthData}
        />
      )}
      <div className={css.container}>
        <ContactsFrame
          openModal={openModal}
          senderNumber={senderNumber}
          addRecipient={addRecipient}
        />
        <ChatFrame recipient={recipient} authData={authData} />
      </div>
    </>
  );
};
