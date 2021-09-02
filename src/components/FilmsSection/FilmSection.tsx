import React from "react";
import { useSelector } from "react-redux";
import { IFilmList } from "../../store/film/interface";
import { getFilmDataSelector } from "../../store/film/selectors";
import FilmItem from "./FilmItem/FilmItem";
import styles from "./filmSection.module.scss";

const FilmSection: React.FC = () => {
  const { data } = useSelector(getFilmDataSelector);

  return (
    <div className={styles.film}>
      <ul className={styles.list}>
        {data.map((film: IFilmList, idx: number) => (
          <FilmItem {...film} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default FilmSection;
