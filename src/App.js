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
    { value: 29, id: 3 },
    { value: 25, id: 4 },
    { value: 27, id: 5 },
    { value: 30, id: 6 },
    { value: 23, id: 7 },
    { value: 21, id: 8 },
    { value: 31, id: 9 },
    { value: 28, id: 10 },
    { value: 21, id: 11 },
    { value: 25, id: 12 },
    { value: 19, id: 13 },
    { value: 22, id: 14 },
    { value: 23, id: 15 },
  ]);

  const select = () => {
    let s = document.getElementById("speed");
    let speed;
    if (s.value === "slow") {
      speed = 600;
    } else if (s.value === "normal") {
      speed = 300;
    } else {
      speed = 100;
    }
    change();

    selection(arr, speed);
  };

  const bub = () => {
    let s = document.getElementById("speed");
    let speed;
    if (s.value === "slow") {
      speed = 500;
    } else if (s.value === "normal") {
      speed = 200;
    } else {
      speed = 70;
    }
    change();
    bubbles(arr, speed);
  };
  const insert = () => {
    let s = document.getElementById("speed");
    let speed;
    if (s.value === "slow") {
      speed = 600;
    } else if (s.value === "normal") {
      speed = 300;
    } else {
      speed = 100;
    }
    change();
    insertion(arr, speed);
  };

  function change() {
    const random = document.querySelector(".random");
    random.innerText = "Reset";
    random.style.backgroundColor = "black";
    random.style.color = "white";
  }

  const randomize = () => {
    const random = document.querySelector(".random");
    random.innerText = "Randomize";
    random.style.backgroundColor = "aquamarine";
    random.style.color = "black";
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
      a[i].value = Math.floor(Math.random() * 25 + 10);
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

        <select id="speed">
          <option className="space" disabled>
            &nbsp;
          </option>
          <option className="label speeds" disabled>
            Speed of visualization
          </option>
          <option className="space" disabled>
            &nbsp;
          </option>

          <option value="fast" className="speeds">
            Fast
          </option>
          <option value="normal" className="speeds" selected>
            Normal
          </option>
          <option value="slow" className="speeds">
            Slow
          </option>
        </select>
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
