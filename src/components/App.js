import React from "react";
import { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [fontSize, setFontSize] = useState(16);
  const [max, setMax] = useState(50);
  const [word, setWord] = useState(0);
  const [char, setChar] = useState(0);
  // const font={}
  const onChangHandler = (e) => {
    console.log(e.target.value);
    const text = e.target.value;

    let w_count = 0;
    if (text.length > 0) w_count = text.trim().split(" ").length;
    setWord(w_count);

    // set char count
    setChar(text.length);
  };
  // settext(e.target.value);
  // setchar(text.split(" ").length);

  return (
    <div id="main">
      <textarea
        style={{ fontSize: fontSize + "px" }}
        maxLength={max}
        onChange={onChangHandler}
      ></textarea>
      <div id="word-counter">Total no of word written {word}</div>
      <div id="char-counter">Total no of characters used {char}</div>
      <input
        type="number"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        id="char-limit-input"
      />
      <input
        type="range"
        id="fontSize-input"
        min="16px"
        max="32px"
        value={fontSize}
        onChange={(e) => {
          setFontSize(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
