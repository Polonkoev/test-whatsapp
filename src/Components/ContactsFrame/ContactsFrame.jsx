import css from "./ContactsFrame.module.css";
export const ContactsFrame = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.header}>
          <p>Отправитель: </p>
        </div>
      </div>
      <button className={css.startBtn}>Начать чат</button>
    </div>
  );
};
