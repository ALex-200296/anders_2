import React from "react";
import styles from "./about.module.scss";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>Ли Александр Геннадьевич</h1>
      <p className={styles.descr}>
        Начинающий веб-разработчик (Санкт-петербург)
      </p>
      <p>
        Вырос в прекрасном Ставропольском крае, проживаю в Санкт-Петербурге с
        2016 года. Заниматься программированием начал в 2019 году. Я очень
        целеустремленный и пунктуальный человек. Также увлекаюсь спортом и
        музыкой. Сейчас пытаюсь попасть на стажировку(надеюсь у меня
        получиться).
      </p>
    </section>
  );
};

export default About;
