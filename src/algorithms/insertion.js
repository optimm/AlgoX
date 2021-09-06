import React from "react";

const insertion = (arr) => {
  console.log(arr);
  let i = 1,
    j = 0;

  const sort = setInterval(() => {
    const button = document.querySelector(".random");
    button.addEventListener("click", () => {
      clearInterval(sort);
    });
    if (j >= 0 && arr[j].value > arr[j + 1].value) {
      if (document.querySelector(".current")) {
        document.querySelector(".current").classList.remove("current");
      }
      document.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
      });
      let first = document.querySelector(`#id${arr[j].id}`);
      let second = document.querySelector(`#id${arr[j + 1].id}`);
      second.classList.add("active");
      [first.style.transform, second.style.transform] = [
        second.style.transform,
        first.style.transform,
      ];
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    } else if (i >= arr.length - 1) {
      clearInterval(sort);
      document.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
      });
    } else {
      i++;
      j = i - 1;
      if (document.querySelector(".current")) {
        document.querySelector(".current").classList.remove("current");
      }
      document.querySelector(".container").children[i].classList.add("current");
    }
  }, 100);
};

export default insertion;
