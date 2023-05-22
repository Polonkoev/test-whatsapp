import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useState } from "react";
import axios from "axios";
import css from "./Modal.module.css";
export const Modal = ({ closeModal, senderNumberProps, getAuthData }) => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const handleCloseModal = () => {
    closeModal();
  };

  const fetchAccountData = () => {
    axios(
      `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`
    )
      .then((response) => {
        console.log(response.data);
        senderNumberProps(response.data.wid.split("@")[0]);

        Notify.success("Авторизовано!");
      })
      .catch((error) => {
        console.error(error);
        Notify.failure("Ошибка доступа или сети! Проверьте данные и повторите");
      });
  };

  const handleIdChange = (event) => {
    const newId = event.target.value.trim();
    setIdInstance(newId);
  };

  const handleApiTokenChange = (event) => {
    const newToken = event.target.value.trim();
    setApiTokenInstance(newToken);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (idInstance !== "" && apiTokenInstance !== "") {
      closeModal();
      fetchAccountData();
      getAuthData(idInstance, apiTokenInstance);
    } else {
      Notify.failure("Заполните поля!");
    }
  };

  return (
    <div className={css.overlay}>
      <div className={css.container}>
        <h2 className={css.title}>Пожалуйста заполните форму</h2>
        <form className={css.form}>
          <label>
            <input
              type="text"
              className={css.instance}
              placeholder="idInstance"
              value={idInstance}
              onChange={handleIdChange}
            />
          </label>
          <label>
            <input
              type="text"
              className={css.token}
              placeholder="apiTokenInstance"
              value={apiTokenInstance || ""}
              onChange={handleApiTokenChange}
            />
          </label>

          <button className={css.submit} type="submit" onClick={handleSubmit}>
            Отправить
          </button>
        </form>
        <button className={css.closeBtn} onClick={handleCloseModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
};
