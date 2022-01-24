import { createSlice } from "@reduxjs/toolkit";
import arrGenerate from "./arrGenerate";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    arr: [],
    speed: 500,
    size: 15,
    isDisabled: false,
    pivot: 3,
    algo: 4,
  },
  reducers: {
    setSpeed: (state, action) => {
      return {
        ...state,
        speed: action.payload,
      };
    },
    setSize: (state, action) => {
      const tempArr = arrGenerate(action.payload);
      return state.size !== action.payload
        ? {
            ...state,
            arr: tempArr,
            size: action.payload,
          }
        : { ...state };
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
          element.classList.remove("red");
          element.classList.remove("blue");
        }
      }
      return {
        ...state,
        size: action.payload.length,
        arr: tempArr,
      };
    },
    setIsDisabled: (state, action) => {
      return {
        ...state,
        isDisabled: action.payload,
      };
    },
    arrGenerator: (state) => {
      let tempArr = arrGenerate(state.size);
      return {
        ...state,
        arr: tempArr,
      };
    },
    setPivot: (state, action) => {
      return {
        ...state,
        pivot: action.payload,
      };
    },
    setAlgo: (state, action) => {
      return {
        ...state,
        algo: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSpeed,
  setSize,
  setArr,
  setIsDisabled,
  arrGenerator,
  setPivot,
  setAlgo,
} = counterSlice.actions;

export default counterSlice.reducer;
