var running = true;
const removeClass = (className) => {
  document.querySelectorAll(`.${className}`).forEach((element) => {
    element.classList.remove(className);
  });
};

const sort = async (arr, speed, i, n) => {
  return await new Promise((resolve) => {
    document.querySelector(".stop-btn").addEventListener("click", () => {
      running = false;
    });
    let min_idx = i;
    removeClass("red");
    document.getElementById(`id${arr[min_idx].id}`).classList.add("red");
    let j = i + 1;
    const innerInterval = setInterval(() => {
      if (!running) {
        resolve(true);
        clearInterval(innerInterval);
      } else if (j < n) {
        removeClass("green");
        document.getElementById(`id${arr[j].id}`).classList.add("green");
        if (arr[j].value < arr[min_idx].value) {
          min_idx = j;
          removeClass("red");
          document.getElementById(`id${arr[min_idx].id}`).classList.add("red");
        }
        j++;
      } else {
        clearInterval(innerInterval);
        removeClass("green");
        let first = document.querySelector(`#id${arr[i].id}`);
        let second = document.querySelector(`#id${arr[min_idx].id}`);
        [first.style.transform, second.style.transform] = [
          second.style.transform,
          first.style.transform,
        ];
        [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
        document.querySelector(`#id${arr[i].id}`).classList.remove("red");
        document.querySelector(`#id${arr[i].id}`).classList.add("yellow");
        resolve(true);
      }
    }, speed);
  });
};

const SelectionSort = async (arr, speed, setIsDisabled) => {
  const sortCall = async (arr, speed, i, n) => {
    if (i < n) {
      running && (await sort(arr, speed, i, n));
      console.log(arr);
      running && (await sortCall(arr, speed, i + 1, n));
    }
  };
  const n = arr.length;
  await sortCall(arr, speed, 0, n);
  running = true;
  setIsDisabled(false);
};

export default SelectionSort;
