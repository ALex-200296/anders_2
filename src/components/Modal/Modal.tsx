import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

interface IModal {
  text: string;
}

const Modal: React.FC<IModal> = ({ text }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>{text}</div>,
    document.getElementById("modal")!
  );
};

export default Modal;
