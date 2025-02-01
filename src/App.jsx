import { useState, useEffect } from "react";
import styles from "./styles/app.module.css";
import Card from "./components/Card";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIDs, setSelectedImageIDs] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }&count=12`,
        { mode: "cors" }
      );
      const data = await response.json();
      setImages(data);
    };

    getImages();
  }, []);

  useEffect(() => {
    const modal = document.querySelector("dialog");
    isGameOver ? modal.showModal() : modal.close();
  }, [isGameOver]);

  const isGameWon = selectedImageIDs.length === images.length;

  const shuffleCards = (array) => {
    const newArray = [...array];
    for (let index = newArray.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [newArray[index], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[index],
      ];
    }
    return newArray;
  };

  const handleCardClick = (id) => {
    if (selectedImageIDs.includes(id)) {
      setIsGameOver(true);
    } else {
      setSelectedImageIDs([...selectedImageIDs, id]);
      setScore(score + 1);
      if (selectedImageIDs.length === images.length - 1) setIsGameOver(true);
    }

    setImages(shuffleCards(images));
  };

  const handleRetryClick = () => {
    setSelectedImageIDs([]);
    setScore(0);
    if (score > bestScore) setBestScore(score);
    setIsGameOver(false);
  };

  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <div className={styles.scoreboard}>
          <div>Score: {score}</div>
          <div>Best Score: {bestScore}</div>
        </div>
      </header>
      <main className={styles["card-grid"]}>
        {images.map((image) => (
          <Card
            key={image.id}
            image={image.urls.raw + "&fm=jpg&w=740&fit=max"}
            text={image.alt_description}
            onClick={() => handleCardClick(image.id)}
          />
        ))}
      </main>
      <dialog>
        <p>You {isGameWon ? "Win" : "Lose"}!!!</p>
        <button onClick={handleRetryClick}>Play Again</button>
      </dialog>
    </>
  );
};

export default App;
