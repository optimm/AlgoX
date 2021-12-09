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
  console.log("L", L);
  console.log("R", R);
  console.log("strr", strr);
  console.log(posArr, "POS ARR");
  await new Promise((resolve) => {
    const innerInterval = setInterval(() => {
      if (k <= r) {
        // let first = document.querySelector(`#id${arr[k].id}`);
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
    console.log("Innner done...");
  });
}

const merge_sort = async (getArr, speed, setIsDisabled) => {
  var getArrVals = await getArr();
  var arr = [...getArrVals];
  console.log(arr, "Extracted..");
  // await merge(arr, 0, 2, 5, speed);
  var recArr = [];
  const mergeSort = async (arr, l, r, speed) => {
    if (l >= r) {
      console.log("Returned....");
      return;
    }
    var m = l + parseInt((r - l) / 2);
    await mergeSort(arr, l, m, speed);
    await mergeSort(arr, m + 1, r, speed);
    recArr.push([l, m, r]);
  };
  await mergeSort(arr, 0, arr.length - 1, speed);
  console.log(recArr);
  for (let i = 0; i < recArr.length; i++) {
    const element = recArr[i];
    await merge(arr, element[0], element[1], element[2], speed);
  }
  document.querySelectorAll(".green").forEach((element) => {
    element.classList.add("yellow");
  });
  setIsDisabled(false);
  ////////////////////////////////////////////////////////////////////////////////////////////////
  //   let curRec = 0;
  //   const intervalProp = setIntervalAsync(async () => {
  //     await new Promise(async (resolve) => {
  //       console.log(curRec, recursionOrder.length);
  //       if (curRec === recursionOrder.length) {
  //         clearInterval(intervalProp);
  //         setIsDisabled(false);
  //       } else {
  //         console.log("Fifth Step");
  //         await merge(
  //           recursionOrder[curRec][0],
  //           recursionOrder[curRec][1],
  //           recursionOrder[curRec][2]
  //         );
  //         console.log("Bottom of the await");
  //         resolve(curRec++);
  //       }
  //     });
  //   }, 100);
};

export default merge_sort;
