import React from "react";
import { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [text, settext] = useState("");
  const [max, setmax] = useState(50);
  const [word, setword] = useState(0);
  const [char, setchar] = useState(0);
  // const font={}
  const handlechange = (e) => {
    settext(e.target.value);
    setchar(text.split(" ").length);
  };

  return (
    <div id="main">
      <textarea
        style={{ fontSize: { word } }}
        maxLength={max}
        onChange={handlechange}
      ></textarea>
      <div id="word-counter">Total no of word written {char}</div>
      <div id="char-counter">Total no of characters used {text.length}</div>
      <input
        type="number"
        value={max}
        onChange={(e) => setmax(e.target.value)}
        id="char-limit-input"
      />
      <input
        id="fontSize-input"
        type="range"
        max="32px"
        min="16"
        onChange={(e) => setword(e.target.value)}
      />
    </div>
  );
};

export default App;
