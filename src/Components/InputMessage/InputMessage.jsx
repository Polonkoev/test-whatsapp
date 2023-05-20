import css from "./InputMessage.module.css";
export const InputMessage = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.inputWrapper}>
          <input className={css.input} type="text" />
          <button className={css.btn}>Send</button>
        </div>
      </div>
    </>
  );
};
