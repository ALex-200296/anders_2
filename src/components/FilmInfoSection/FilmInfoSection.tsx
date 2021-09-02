import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { IFilmItem } from "../../store/film/interface";
import { fetchOperationFilmID } from "../../store/film/operations";
import { getFilmDataSelector } from "../../store/film/selectors";
import imagePoster from "../../assets/notimages.png";
import styles from "./filmInfoSection.module.scss";
import { RoutesHome } from "../../routes/routesConfig";
interface IFilmItemUseParams {
  id: string;
}

const FilmInfoSection: React.FC = () => {
  const { id } = useParams<IFilmItemUseParams>();
  const { item, loading } = useSelector(getFilmDataSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOperationFilmID(id));
  }, []);
  if (loading) {
    return <div className={styles.wrap}></div>;
  }
  return (
    <div className={styles.wrap}>
      <Link to={RoutesHome} className={styles.Link}>
        HOME
      </Link>
      <div className={styles.filmInfo}>
        {item.Poster === "N/A" ? (
          <img src={imagePoster} alt={item.Poster} />
        ) : (
          <img src={item.Poster} alt={item.Poster} />
        )}
        <div className={styles.detailsWrap}>
          <h2 className={styles.about}>{item.Title}</h2>
          <span className={styles.span}>
            <b>Director:</b> {item.Director}
          </span>
          <span className={styles.span}>{item.Genre}</span>
          <span className={styles.span}>
            <b>Language:</b> {item.Language}
          </span>
          <span className={styles.span}>
            <b>Year:</b> {item.Year}
          </span>
          <h3>Description</h3>
          <p className={styles.descr}>{item.Plot}</p>
          <span className={styles.span}>
            <b>Actors</b>: {item.Actors}
          </span>
          <span className={styles.span}>
            <b>Released:</b> {item.Released}
          </span>
          <span className={styles.span}>
            <b>Writer:</b> {item.Writer}
          </span>
          <span className={styles.span}>
            <b>Country:</b> {item.Country}
          </span>
          <span className={styles.span}>
            <b>Rating:</b> {item.imdbRating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilmInfoSection;
