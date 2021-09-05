import insertion from "./algorithms/insertion";

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
    { value: 25, id: 16 },
    { value: 37, id: 17 },
    { value: 30, id: 18 },
    { value: 23, id: 19 },
    { value: 21, id: 20 },
  ]);
  let [color, setColor] = useState([]);

  // **************************************** bubble sort ***********************************************************
  const bubble = () => {
    console.log("jghsvdhsvd");
    let i = 0,
      j = 0;
    let swapped = 0;
    const sort = setInterval(() => {
      console.log(arr);

      resetColor();
      color[j] = "gold";
      let flag = true;

      if (j < 19 && arr[j].value > arr[j + 1].value) {
        color[j] = "red";
        color[j + 1] = "red";
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped++;
      } else if (i > arr.length - 1) {
        clearInterval(sort);
        resetColor();
      } else if (j >= arr.length - i - 1) {
        flag = false;
        j = 0;
        i++;
        resetColor();
      }
      if (!flag && swapped == 0) {
        clearInterval(sort);
        resetColor();
      }
      if (!flag) {
        swapped = 0;
      }
      if (flag) {
        j++;
      }

      setArr([...arr]);
      // setOrder({ ...order });
    }, 200);
  };
  // **************************************** bubble sort end ***********************************************************

  // **************************************** selection sort***********************************************************
  const selection = () => {
    let i = 0,
      j = 1,
      mini = 0;
    console.log("hi");
    const sort = setInterval(() => {
      color[mini] = "purple";
      color[j] = "gold";
      if (j <= 19 && arr[j].value < arr[mini].value) {
        mini = j;
        j++;
      } else if (i >= arr.length - 1) {
        clearInterval(sort);
        resetColor();
      } else if (j === arr.length) {
        color[mini] = "red";
        color[i] = "red";
        [arr[mini], arr[i]] = [arr[i], arr[mini]];
        i++;
        j = i + 1;
        mini = i;
        setArr([...arr]);
      } else if (arr[j] >= arr[mini]) {
        j++;
      }

      setArr([...arr]);
      resetColor();
    }, 600);
  };

  // **************************************** selection sort end***********************************************************

  const call = () => {
    insertion(arr);
  };
  const bub = () => {
    bubble(arr, color);
  };

  const randomize = () => {
    for (let i = 0; i < 20; i++) {
      arr[i].value = Math.floor(Math.random() * 30 + 10);
      color[i] = "rgb(81, 255, 0)";
    }
    setArr([...arr]);
  };
  function resetColor() {
    for (let i = 0; i < arr.length; i++) {
      color[i] = "rgb(81, 255, 0)";
    }
  }
  return (
    <div>
      <Header />
      <div className="handler">
        <button className="sort random" onClick={randomize}>
          Randomize
        </button>
        <button className="sort" onClick={call}>
          Insertion
        </button>
        <button className="sort" onClick={bubble}>
          Bubble
        </button>
        <button className="sort" onClick={selection}>
          Selection
        </button>
      </div>
      <div className="container active current">
        {arr.map((item, index) => {
          return (
            <div
              id={`id${index + 1}`}
              className="bar"
              style={{
                backgroundColor: color[index],
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
