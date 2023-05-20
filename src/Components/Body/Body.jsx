import { Header } from "../Header/Header";
import { GeneralFrame } from "../GeneralFrame/GeneralFrame";
import { Modal } from "../../Pages/Modal/Modal";
import css from "./Body.module.css";

export const Body = () => {
  return (
    <div className={css.container}>
      if (condition) {}
      <Modal />
      <Header />
      <GeneralFrame />
    </div>
  );
};
