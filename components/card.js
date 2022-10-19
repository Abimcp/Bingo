import styles from "./card.module.css";
import { useState } from "react";
export default function Card({ text }) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      onClick={() => setClicked(clicked ? false : true)}
      className={clicked ? `${styles.card} ${styles.cardClicked}` : styles.card}
    >
      <p>{text}</p>
    </button>
  );
}
