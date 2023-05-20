import css from "./Modal.module.css";
export const Modal = () => {
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
            />
          </label>
          <label>
            <input
              type="text"
              className={css.token}
              placeholder="apiTokenInstance"
            />
          </label>

          <button className={css.submit}>Send</button>
        </form>
        <button className={css.closeBtn}>Закрыть</button>
      </div>
    </div>
  );
};
