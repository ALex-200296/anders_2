import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

export interface IModal {
  text: string;
}

const Modal: React.FC<IModal> = ({ text = "not found text" }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>{text}</div>,
    document.getElementById("modal")!
  );
};

export default Modal;
