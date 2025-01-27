import styles from "../styles/card.module.css";

const Card = ({ image, text, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <img src={image} />
    <div className={styles["card-text"]}>{text}</div>
  </div>
);

export default Card;
