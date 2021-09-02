import React from "react";
import useInput from "../../hooks/useInput";
import Loading from "../Loading/Loading";
import styles from "./search.module.scss";

const Search: React.FC = () => {
  const search = useInput("", { isEmpty: true, minLength: 3 });
  return (
    <div className={styles.search}>
      <form className={styles.form}>
        <Loading />
        <div>
          <div className={styles.wrap}>
            <input
              value={search.value}
              onChange={search.onChange}
              onBlur={search.onBlur}
              type="text"
              className={styles.input}
            />
            <button className={styles.btn}>поиск</button>
          </div>
          {search.isDirty && search.isEmpty && (
            <span className={styles.valid}>Поле не может быть пустым</span>
          )}
          {search.isDirty && search.minLengthError && (
            <span className={styles.valid}>Слишком маленькое слово</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
