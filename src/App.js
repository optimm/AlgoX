import insertion from "./algorithms/insertion";
import selection from "./algorithms/selection";

import bubbles from "./algorithms/bubbles";

import React from "react";
import Header from "./Header";
import { useState } from "react";
function App() {
  let [arr, setArr] = useState([
    { value: 19, id: 1 },
    { value: 22, id: 2 },
    { value: 33, id: 3 },
    { value: 25, id: 4 },
    { value: 37, id: 5 },
    { value: 30, id: 6 },
    { value: 23, id: 7 },
    { value: 21, id: 8 },
    { value: 31, id: 9 },
    { value: 28, id: 10 },
    { value: 37, id: 11 },
    { value: 33, id: 12 },
    { value: 19, id: 13 },
    { value: 22, id: 14 },
    { value: 33, id: 15 },
  ]);

  const select = () => {
    selection(arr);
  };
  const bub = () => {
    bubbles(arr);
  };
  const insert = () => {
    insertion(arr);
  };

  const randomize = () => {
    document.querySelectorAll(".bar").forEach((element, index) => {
      element.classList.remove("active");
      element.classList.remove("current");
      element.classList.remove("green");
      element.classList.remove("yellow");
      element.style.transform = `translate(${40 * index}px, ${0}px)`;
      element.classList.remove("purple");
    });

    let a = [...arr];
    for (let i = 0; i < arr.length; i++) {
      a[i].value = Math.floor(Math.random() * 30 + 10);
      a[i].id = i + 1;
    }

    console.log(a);
    setArr(a);
  };

  return (
    <div>
      <Header />
      <div className="handler">
        <button className="random" onClick={randomize}>
          Randomize
        </button>
        <button className="sort" onClick={bub}>
          Bubble
        </button>
        <button className="sort" onClick={select}>
          Selection
        </button>
        <button className="sort" onClick={insert}>
          Insertion
        </button>
        {/* <button className="sort" onClick={selection}>
          Selection
        </button> */}
      </div>
      <div className="container active current">
        {arr.map((item, index) => {
          return (
            <div
              id={`id${index + 1}`}
              className="bar"
              style={{
                height: item.value * 10,
                transform: `translate(${40 * index}px, ${0}px)`,
                transition: "transform 0.3s ease",
                transition: "all 0.3s ease",
              }}
            >
              {item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
