import { AddContactModal } from "../../Pages/Modal/AddContactModal/AddContactModal";
import { useState } from "react";
import css from "./ContactsFrame.module.css";
import { Notify } from "notiflix";
export const ContactsFrame = ({ openModal, senderNumber, addRecipient }) => {
  const [contacts, setContacts] = useState([]);

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
  const deleteContact = (index) => {
    contacts.splice(index, 1);

    Notify.success("Контакт удален!");
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
                  <button onClick={() => deleteContact(index)}>
                    Удалить контакт
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
