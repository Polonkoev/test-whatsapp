import { ChatFrame } from "../ChatFrame/ChatFrame";
import { ContactsFrame } from "../ContactsFrame/ContactsFrame";
import css from "./GeneralFrame.module.css";
export const GeneralFrame = () => {
  return (
    <div className={css.container}>
      <ContactsFrame />
      <ChatFrame />
    </div>
  );
};
