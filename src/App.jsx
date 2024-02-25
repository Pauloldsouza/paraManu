import { useEffect, useState } from "react";
import "./App.css";
import images from "./components/imgs.jsx";

function App() {
  const [pet, setPet] = useState("cat");
  const [version, setVersion] = useState("1");
  const [currentPet, setCurrentPet] = useState(pet + version);

  function handleguess() {
    setVersion((prev) => (prev === "1" ? "2" : "1"));
  }

  function handleNext() {
    const pets = ["cat", "dog", "pig", "shark"];
    const currentIndex = pets.indexOf(pet);
    const nextIndex = (currentIndex + 1) % pets.length;
    const nextPet = pets[nextIndex];
    setPet(nextPet);
    setVersion("1");
  }

  useEffect(() => {
    setCurrentPet(pet + version);
  }, [pet, version]);

  const cardCover = images[currentPet];
  return (
    <div className="pinkContainer">
      <div className="whiteContainer">
        <h1>Manu</h1>
        <button
          className="card"
          style={{ backgroundImage: `url(${cardCover})` }}
          onClick={handleguess}
        ></button>
        <button className="next" onClick={handleNext}>
          Próximo
        </button>
      </div>
    </div>
  );
}

export default App;
