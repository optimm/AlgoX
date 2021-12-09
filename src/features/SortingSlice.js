import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    arr: [],
    speed: 500,
    size: 15,
    isDisabled: false,
  },
  reducers: {
    setSpeed: (state, action) => {
      return {
        ...state,
        speed: action.payload,
      };
    },
    setSize: (state, action) => {
      return {
        ...state,
        size: action.payload,
      };
    },
    setArr: (state, action) => {
      const tempArr = [];
      for (let i = 0; i < action.payload.length; i++) {
        tempArr.push({
          value: action.payload[i],
          id: i + 1,
        });
        let element = document.querySelector(`#id${i + 1}`);
        if (element) {
          element.style.transform = `translate(${
            (600 / action.payload.length + 5) * i
          }px, ${0}px)`;
          element.classList.remove("green");
          element.classList.remove("yellow");
        }
      }
      return {
        ...state,
        arr: tempArr,
        size: action.payload.length,
      };
    },
    setIsDisabled: (state, action) => {
      return {
        ...state,
        isDisabled: action.payload,
      };
    },
    arrGenerator: (state) => {
      let tempArr = [];
      for (let i = 0; i < state.size; i++) {
        tempArr.push({
          value: Math.floor(Math.random() * 70 + 10),
          id: i + 1,
        });
        let element = document.querySelector(`#id${i + 1}`);
        if (element) {
          element.style.transform = `translate(${
            (600 / state.size + 5) * i
          }px, ${0}px)`;
          element.classList.remove("green");
          element.classList.remove("yellow");
        }
      }
      return {
        ...state,
        arr: tempArr,
      };
    },
  },
});

// Action creators are generated for eac\h case reducer function
export const { setSpeed, setSize, setArr, setIsDisabled, arrGenerator } =
  counterSlice.actions;

export default counterSlice.reducer;
