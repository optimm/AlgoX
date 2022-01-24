var running = true;

async function merge(arr, l, m, r, speed) {
  //Remove green form all
  document.querySelectorAll(".green").forEach((element) => {
    element.classList.remove("green");
  });
  var n1 = m - l + 1;
  var n2 = r - m;
  var L = new Array(n1);
  var R = new Array(n2);
  var strr = [];
  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  var i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    if (L[i].value <= R[j].value) {
      strr.push(L[i]);
      i++;
    } else {
      strr.push(R[j]);
      j++;
    }
  }
  while (i < n1) {
    strr.push(L[i]);
    i++;
  }
  while (j < n2) {
    strr.push(R[j]);
    j++;
  }
  k = l;
  var posArr = [];
  for (let i = l; i <= r; i++) {
    let first = document.querySelector(`#id${arr[i].id}`);
    first.classList.add("green");
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(first.style.transform);
    posArr.push(matches[0].slice(1, matches[0].length - 1).split(",")[0]);
  }
  await new Promise((resolve) => {
    const innerInterval = setInterval(() => {
      if (!running) {
        clearInterval(innerInterval);
        resolve(true);
      }
      if (k <= r) {
        let second = document.querySelector(`#id${strr[k - l].id}`);
        second.style.transform = `translate(${posArr[k - l]},-50vh)`;
        arr[k] = strr[k - l];
        k++;
      } else {
        clearInterval(innerInterval);
        for (let i = l; i <= r; i++) {
          let first = document.querySelector(`#id${arr[i].id}`);
          var regExp = /\(([^)]+)\)/;
          var matches = regExp.exec(first.style.transform);
          first.style.transform = `translate(${
            matches[0].slice(1, matches[0].length - 1).split(",")[0]
          },0px)`;
        }
        resolve(true);
      }
    }, speed);
  });
}

const merge_sort = async (arr, speed, setIsDisabled) => {
  return new Promise(async (resolve, reject) => {
    document.querySelector(".stop-btn").addEventListener("click", () => {
      running = false;
    });
    var recArr = [];
    const mergeSort = async (l, r) => {
      if (l >= r) {
        return;
      }
      var m = l + parseInt((r - l) / 2);
      await mergeSort(l, m);
      await mergeSort(m + 1, r);
      recArr.push([l, m, r]);
    };
    await mergeSort(0, arr.length - 1);
    for (let i = 0; i < recArr.length; i++) {
      const element = recArr[i];
      await merge(arr, element[0], element[1], element[2], speed);
      if (!running) {
        resolve(true);
        setIsDisabled(false);
        running = true;
        break;
      }
    }
    setIsDisabled(false);
  });
};

export default merge_sort;
