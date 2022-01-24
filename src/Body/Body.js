import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { arrGenerator } from "../features/SortingSlice";
import QuickSortPivot from "./BodyParts/QuickSortPivot";
import "./Body.css";
function Body() {
  const dispatch = useDispatch();
  const { size, arr, speed, algo } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  useEffect(() => {
    dispatch(arrGenerator());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div className="body-main-container">
        <div className="body-controller-container">
          {algo === 4 && <QuickSortPivot />}
        </div>
        <div className="bars-container">
          <div className="container red blue">
            {arr.map((item, index) => {
              return (
                <div
                  id={`id${index + 1}`}
                  className="bar"
                  style={{
                    width: 500 / size + "px",
                    height: item.value * 4,
                    transform: `translate(${
                      (600 / size + 5) * index
                    }px, ${0}px)`,
                    transition: `transform ${speed / 1500}s ease`,
                  }}
                >
                  <span
                    style={{ fontSize: `min(${300 / size}px, 2rem)` }}
                    className="barcount"
                  >
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Body;
