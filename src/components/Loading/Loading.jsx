import React from "react";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.lds_facebook}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
