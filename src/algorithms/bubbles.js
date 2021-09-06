import React from "react";

const bubbles = (arr) => {
  console.log(arr);
  var i = 0,
    j = 0,
    flag = true;
  const sort = setInterval(() => {
    const button = document.querySelector(".random");
    button.addEventListener("click", () => {
      clearInterval(sort);
    });
    if (flag) {
      document.querySelectorAll(".green").forEach((element) => {
        element.classList.remove("green");
      });
      let first = document.querySelector(`#id${arr[j].id}`);
      let second = document.querySelector(`#id${arr[j + 1].id}`);
      second.classList.add("green");
      first.classList.add("green");
      flag = false;
    } else if (j < arr.length - i - 1) {
      if (arr[j].value > arr[j + 1].value) {
        let first = document.querySelector(`#id${arr[j].id}`);
        let second = document.querySelector(`#id${arr[j + 1].id}`);
        [first.style.transform, second.style.transform] = [
          second.style.transform,
          first.style.transform,
        ];
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      j++;
      if (j != arr.length - i - 1) {
        flag = true;
      }
    } else if (i >= arr.length) {
      clearInterval(sort);
    } else {
      document.querySelectorAll(".green").forEach((element) => {
        element.classList.remove("green");
      });
      document
        .querySelector(`#id${arr[arr.length - i - 1].id}`)
        .classList.add("yellow");
      i++;
      j = 0;
      flag = true;
    }

    // console.log(i);
  }, 100);
};

export default bubbles;
