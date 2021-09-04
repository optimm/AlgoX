import React, { useState } from "react";
import Header from "./Header";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { ColorLensOutlined } from "@material-ui/icons";

function App() {
  const [speed, setSpeed] = useState(600);
  let [arr, setArr] = useState([
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "30",
    "37",
    "38",
  ]);
  let [order, setOrder] = useState({});
  let [color, setColor] = useState([]);

  function clickHandler() {
    let arrTemp = [],
      orderTemp = {},
      colorTemp = [];
    for (let i = 0; i < 10; i++) {
      arrTemp.push(Math.floor(Math.random() * 30 + 10));
      orderTemp[arrTemp[i]] = i;
      colorTemp[i] = "green";
    }

    setArr([...arrTemp]);
    setOrder(orderTemp);
    setColor(colorTemp);
  }

  function resetColor() {
    for (let i = 0; i < arr.length; i++) {
      color[i] = "green";
    }
  }

  const bubble = () => {
    let i = 0,
      j = 0;
    let swapped = 0;
    const sort = setInterval(() => {
      console.log(arr);

      resetColor();
      color[j] = "gold";
      let flag = true;

      if (arr[j] > arr[j + 1]) {
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
    }, 1000);
  };

  const call = () => {
    let i = 0,
      j = 0;
    let clr = [];
    clr = color;
    const sort = setInterval(() => {
      resetColor();

      if (j >= 0 && arr[j] > arr[j + 1]) {
        clr[j] = "red";
        order[arr[j]] = j + 2;
        order[arr[j + 1]] = j + 1;

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        j--;
      } else if (i >= arr.length - 1) {
        clearInterval(sort);
        resetColor();
      } else {
        i++;
        resetColor();

        j = i - 1;
        clr[i] = "red";
      }
      setArr([...arr]);
      // setOrder({ ...order });
    }, 1000);
  };

  const selection = () => {
    let i = 0,
      j = 1,
      mini = 0;

    const sort = setInterval(() => {
      color[mini] = "purple";
      color[j] = "gold";
      if (arr[j] < arr[mini]) {
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
    }, 400);
  };

  return (
    <div>
      <Header />
      <div className="handler">
        <button onClick={clickHandler} className="sort random">
          Randomize
        </button>
        <button onClick={call} className="sort">
          Insertion
        </button>
        <button onClick={bubble} className="sort">
          Bubble sort
        </button>
        <button onClick={selection} className="sort">
          Selection
        </button>
      </div>
      <div className="container">
        {arr.map((item, index) => {
          return (
            <div
              className="bar"
              style={{
                backgroundColor: color[index],
                height: item * 10,

                // margin: "10px",
                transition: "all 0.8s ease",
              }}
            >
              {" "}
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
