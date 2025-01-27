import { useState, useEffect } from "react";
import styles from "./styles/app.module.css";
import Card from "./components/Card";

const App = () => {
  const [images, setImages] = useState([]);

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

  return (
    <>
      <h1>Memory Game</h1>
      <div className={styles["card-grid"]}>
        {images.map((image) => (
          <Card
            key={image.id}
            image={image.urls.raw + "&fm=jpg&w=888"}
            text={image.alt_description}
          />
        ))}
      </div>
    </>
  );
};

export default App;
