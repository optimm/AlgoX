var running = true;

const insertion_sort = async (arr, speed, setIsDisabled) => {
  return await new Promise((resolve, reject) => {
    document.querySelector(".stop-btn").addEventListener("click", () => {
      running = false;
    });
    console.log(arr);
    let i = 1,
      j = 0;
    document.querySelector(`#id2`).classList.add("green");
    const intervalProp = setInterval(() => {
      if (!running) {
        clearInterval(intervalProp);
        resolve(true);
        setIsDisabled(false);
        running = true;
      }
      if (j >= 0 && arr[j].value > arr[j + 1].value) {
        let first = document.querySelector(`#id${arr[j].id}`);
        let second = document.querySelector(`#id${arr[j + 1].id}`);
        [first.style.transform, second.style.transform] = [
          second.style.transform,
          first.style.transform,
        ];
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        j--;
      } else if (i >= arr.length - 1) {
        resolve(true);
        clearInterval(intervalProp);
        setIsDisabled(false);
      } else {
        document.querySelectorAll(".green").forEach((element) => {
          element.classList.remove("green");
        });
        i++;
        j = i - 1;
        document.querySelector(`#id${i + 1}`).classList.add("green");
      }
      console.log(arr);
    }, speed);
  });
};

export default insertion_sort;
