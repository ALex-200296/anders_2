import React from "react";
import { IFilmList } from "../../../store/film/interface";
import styles from "./filmItem.module.scss";
import notImage from "../../../assets/notimages.png";
import { Link } from "react-router-dom";
import { RoutesFilm } from "../../../pages/Home/routes/homeRoutesConfig";

const FilmItem: React.FC<IFilmList> = ({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
}) => {
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{Title}</h3>
      {Poster === "N/A" ? (
        <img src={notImage} alt={Title} className={styles.img} />
      ) : (
        <img src={Poster} alt={Poster} className={styles.img} />
      )}
      <div className={styles.details}>
        <time dateTime={Year}>Год: {Year}</time>
      </div>
      <Link to={`${RoutesFilm}/${imdbID}`} className={styles.link} />
    </li>
  );
};

export default FilmItem;
