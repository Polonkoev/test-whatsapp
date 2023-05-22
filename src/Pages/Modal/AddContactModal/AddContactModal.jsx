import { useState } from "react";
import css from "./AddContactModal.module.css";
import { Notify } from "notiflix";
export const AddContactModal = ({ closeModal, addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleNumber = (event) => {
    setNumber(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && number !== "") {
      closeModal();
      addContact([name, number]);
      Notify.success("Контакт создан!");
    } else {
      Notify.failure("Заполните поля!");
    }
  };

  return (
    <div className={css.overlay}>
      <div className={css.container}>
        <form className={css.form}>
          <h2 className={css.title}>Добавить контакт</h2>
          <label>
            <p className={css.label}>Имя</p>
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={handleName}
            />
          </label>
          <label>
            <p>Номер</p>
            <input
              type="text"
              placeholder="Номер"
              value={number}
              onChange={handleNumber}
            />
          </label>
          <button className={css.createBtn} onClick={handleSubmit}>
            Создать
          </button>
        </form>
        <button className={css.closeBtn} onClick={closeModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
};
