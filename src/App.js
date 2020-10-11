import React, { useState } from "react";
import "./styles.css";
import CardsList from "./components/CardsList";
import Button from "./components/Button";
import {COLORS} from './CONSTANTS';

export default function App() {
  const [grid, setGrid] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleSuffle = () => {
    let ctr = grid.length,
      temp,
      index;

    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = grid[ctr];
      grid[ctr] = grid[index];
      grid[index] = temp;
    }
    setGrid([...grid]);
  };

  const handleSort = () => {
    setGrid([...grid.sort()]);
  };

  return (
    <main>
      <h1>Shuffle and Sort</h1>
      <div className="cards-list">
        <div className="cards-grid">
          <CardsList lists={grid} bgColor={COLORS} />
        </div>
        <div className="cards-aside">
          <Button text="Shuffle" clickHandler={handleSuffle} />
          <Button text="Sort" clickHandler={handleSort} />
        </div>
      </div>
    </main>
  );
}
