import styles from "../styles/card.module.css";

const Card = ({ image, text, onClick }) => (
  <button className={styles.card} onClick={onClick}>
    <img src={image} alt="" />
    <div className={styles["card-text"]}>{text}</div>
  </button>
);

export default Card;
