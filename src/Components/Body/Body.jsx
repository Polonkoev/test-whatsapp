import { Header } from "../Header/Header";
import { GeneralFrame } from "../GeneralFrame/GeneralFrame";

import css from "./Body.module.css";

export const Body = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <Header />
        <GeneralFrame />
      </div>
    </div>
  );
};
