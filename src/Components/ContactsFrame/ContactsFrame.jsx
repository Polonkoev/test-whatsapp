import { AddContactModal } from "../../Pages/Modal/AddContactModal/AddContactModal";
import { useState } from "react";
import css from "./ContactsFrame.module.css";
export const ContactsFrame = ({ openModal, senderNumber, addRecipient }) => {
  const [contacts, setContacts] = useState([
    ["Almazavr", "877744447777"],
    ["Rus", "877744447777"],
  ]);

  const [isAddContact, setIsAddContact] = useState(false);
  const closeModal = () => {
    setIsAddContact(false);
  };
  const openAddContactModal = () => {
    setIsAddContact(true);
  };

  const addContact = (contact) => {
    const newContact = contact;
    setContacts([...contacts, newContact]);
  };
  const handleClickItem = (item) => {
    addRecipient(item);
  };
  return (
    <>
      {isAddContact && (
        <AddContactModal closeModal={closeModal} addContact={addContact} />
      )}

      <div className={css.container}>
        <div className={css.header}>
          <div className={css.header}>
            <p className={css.sender}>Отправитель: </p>
            {senderNumber === "" ? (
              <button className={css.startBtn} onClick={openModal}>
                Авторизоваться
              </button>
            ) : (
              <>
                <p className={css.senderNumber} onClick={openModal}>
                  {senderNumber}
                </p>
                <button
                  className={css.createChat}
                  onClick={openAddContactModal}
                >
                  Создать чат
                </button>
              </>
            )}
          </div>
        </div>
        <ul className={css.contactsList}>
          {contacts.map((el, index) => {
            const [name, number] = el;
            return (
              <li
                className={css.contactsListItem}
                key={index}
                onClick={() => handleClickItem(el)}
              >
                <div className={css.contactWrapper}>
                  <p>Имя: {name}</p>
                  <p>Номер: {number}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

//TODO Добавить кнопку удаления контакта
