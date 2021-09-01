import React from "react";
import styles from "./emptySection.module.scss";

const EmptySection: React.FC = () => {
  return (
    <div className={styles.empty}>
      <h1 className={styles.about}>EmptyFilm</h1>
    </div>
  );
};

export default EmptySection;
