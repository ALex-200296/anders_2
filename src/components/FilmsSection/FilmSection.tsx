import axios from "axios";
import React, { useEffect } from "react";
import FilmItem from "./FilmItem/FilmItem";
import styles from "./filmSection.module.scss";

const FilmSection: React.FC = () => {
  useEffect(() => {
    axios
      .get(" http://www.omdbapi.com/", {
        params: {
          s: "sdw",
          apiKey: "a7b851b4",
        },
      })
      .then(
        (response) => console.log(response),
        (rej) => console.log(rej)
      );
  });
  return (
    <div className={styles.film}>
      <ul className={styles.list}>
        <FilmItem />
      </ul>
    </div>
  );
};

export default FilmSection;
