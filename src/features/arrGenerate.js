const arrGenerate = (size) => {
  let tempArr = [];
  for (let i = 0; i < size; i++) {
    tempArr.push({
      value: Math.floor(Math.random() * 70 + 10),
      id: i + 1,
    });
    let element = document.querySelector(`#id${i + 1}`);
    if (element) {
      element.style.transform = `translate(${(600 / size + 5) * i}px, ${0}px)`;
      element.classList.remove("green");
      element.classList.remove("yellow");
      element.classList.remove("red");
      element.classList.remove("blue");
    }
  }
  return tempArr;
};

export default arrGenerate;
