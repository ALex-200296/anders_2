import React from "react";
import styles from "./emptySection.module.scss";
import image from "../../assets/380373.jpg";

interface IActors {
  name: string;
}

const actors: IActors[] = [
  {
    name: "Том Холланд",
  },
  {
    name: "Альфред Молина",
  },
  {
    name: "Зендея",
  },
  {
    name: "Мариса Томей",
  },
  {
    name: "Джейкоб Баталон",
  },
  {
    name: "Бенедикт КамберБэтч",
  },
  {
    name: "Джонатан Кимбл Симмонс",
  },
  {
    name: "Джон Фавро",
  },
];

const EmptySection: React.FC = () => {
  return (
    <div className={styles.empty}>
      <img src={image} alt="человек-паук" className={styles.img} />
      <div className={styles.wrap}>
        <div className={styles.descr}>
          <h2>Описание</h2>
          <p>
            Впервые в киноистории Человека-паука наш дружелюбный герой
            разоблачен. Теперь супергеройские подвиги стали неотделимы от его
            обычной жизни. Когда он просит помощи у Доктора Стрэнджа, ситуация
            только накаляется. И Питер Паркер начинает понимать, что такое быть
            Человеком-пауком на самом деле.
          </p>
        </div>
        <h2>Актеры</h2>
        <ul className={styles.list}>
          {actors.map((item: IActors, idx: number) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmptySection;
