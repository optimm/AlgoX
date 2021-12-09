const insertion_sort = async (getArr, speed, setIsDisabled) => {
  var getArrVals = await getArr();
  var arr = [...getArrVals];
  console.log(arr);
  let i = 1,
    j = 0;

  const sort = setInterval(() => {
    const bars = document.querySelectorAll(".bar");
    for (let x = 0; x < i; x++) {
      bars[x].classList.add("yellow");
    }
    if (j >= 0 && arr[j].value > arr[j + 1].value) {
      console.log(arr[j].value, arr[j + 1].value);
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
      console.log(i, "hello", arr[i]);
      let flag = false;
      for (let x = 0; x <= arr.length - 1; x++) {
        if (document.querySelector(".current")) {
          document.querySelector(".current").classList.remove("current");
        }
        bars[x].classList.add("yellow");
        flag = true;
      }
      console.log(flag);
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
  }, speed);
};

export default insertion_sort;
