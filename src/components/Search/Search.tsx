import React from "react";
import { useSelector } from "react-redux";
import useSearch from "../../hooks/useSearch";
import { getFilmDataSelector } from "../../store/film/selectors";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import styles from "./search.module.scss";

const Search: React.FC = () => {
  const { loading } = useSelector(getFilmDataSelector);
  const search = useSearch("", { isEmpty: true, minLength: 3 });
  const { error } = useSelector(getFilmDataSelector);

  return (
    <>
      <div className={styles.search}>
        <form className={styles.form} onSubmit={search.handlerSubmit}>
          {loading && <Loading />}
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
      {error && <Modal text={error} />}
    </>
  );
};

export default Search;
