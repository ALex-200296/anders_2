import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { filmActionError } from "../../store/film/action";
import styles from "./modal.module.scss";

interface IModal {
  text: string;
}

const Modal: React.FC<IModal> = ({ text }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(filmActionError(""));
    }, 3000);
  });
  return ReactDOM.createPortal(
    <div className={styles.modal}>{text}</div>,
    document.getElementById("modal")!
  );
};

export default Modal;
