import { AddContactModal } from "../../Pages/Modal/AddContactModal/AddContactModal";
import { useState } from "react";
import css from "./ContactsFrame.module.css";
import { Notify } from "notiflix";
import { nanoid } from "nanoid";
export const ContactsFrame = ({
  openModal,
  senderNumber,
  addRecipient,
  deleteRecipient,
}) => {
  const [contacts, setContacts] = useState([]);

  const [isAddContact, setIsAddContact] = useState(false);

  const [id, name, number] = contacts;
  const closeModal = () => {
    setIsAddContact(false);
  };
  const openAddContactModal = () => {
    setIsAddContact(true);
  };

  const addContact = (contact) => {
    const [name, number] = contact;
    const newContact = [nanoid(), name, number];

    setContacts([...contacts, newContact]);
  };
  const handleClickItem = (item) => {
    addRecipient(item);
  };
  const deleteContact = (id) => {
    deleteRecipient();
    const updatedContacts = contacts.filter((contact) => contact[0] !== id);
    setContacts(updatedContacts);
    console.log(id);
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
            const [id, name, number] = el;
            return (
              <div key={id}>
                <li
                  className={css.contactsListItem}
                  key={id}
                  onClick={() => handleClickItem(el)}
                >
                  <div className={css.contactWrapper}>
                    <p>Имя: {name}</p>
                    <p>Номер: {number}</p>
                  </div>
                </li>
                <button onClick={() => deleteContact(id)}>
                  Удалить контакт
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
