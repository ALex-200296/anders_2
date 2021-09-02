import React from "react";
import Loading from "../Loading/Loading";
import styles from "./search.module.scss";

const Search: React.FC = () => {
  return (
    <div className={styles.search}>
      <form className={styles.form}>
        <Loading />
        <input type="text" className={styles.input} />
        <button className={styles.btn}>поиск</button>
      </form>
    </div>
  );
};

export default Search;
