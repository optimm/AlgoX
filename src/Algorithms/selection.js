

const selection = async (getArr, speed, setIsDisabled) => {
  var getArrVals = await getArr();
  var arr = [...getArrVals];
  let i = 0,
    j = 1,
    mini = 0;

  const sort = setInterval(() => {
    document.querySelectorAll(".green").forEach((element) => {
      element.classList.remove("green");
    });
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    if (j < 15) {
      let active = document.querySelector(`#id${arr[j].id}`);

      active.classList.add("active");
    }

    if (document.querySelector(".purple")) {
      document.querySelector(".purple").classList.remove("purple");
    }
    let minimum = document.querySelector(`#id${arr[mini].id}`);
    minimum.classList.add("purple");

    if (j <= 14 && arr[j].value < arr[mini].value) {
      mini = j;
      j++;
    } else if (i >= arr.length - 1) {
      document.querySelector(`#id${arr[i].id}`).classList.add("yellow");
      if (document.querySelector(".active")) {
        document.querySelector(".active").classList.remove("active");
      }
      if (document.querySelector(".purple")) {
        document.querySelector(".purple").classList.remove("purple");
      }
      clearInterval(sort);
    } else if (j === arr.length) {
      let first = document.querySelector(`#id${arr[i].id}`);
      let second = document.querySelector(`#id${arr[mini].id}`);

      second.classList.add("green");
      first.classList.add("green");
      [first.style.transform, second.style.transform] = [
        second.style.transform,
        first.style.transform,
      ];
      [arr[mini], arr[i]] = [arr[i], arr[mini]];
      // first.classList.add("yellow");
      document.querySelector(`#id${arr[i].id}`).classList.add("yellow");
      i++;
      j = i + 1;
      mini = i;
    } else if (arr[j] >= arr[mini]) {
      j++;
    }
  }, speed);
};

export default selection;
