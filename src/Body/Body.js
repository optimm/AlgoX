import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { arrGenerator } from "../features/SortingSlice";
import "./Body.css";
function Body() {
  const dispatch = useDispatch();
  const { size, arr, speed } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  useEffect(() => {
    dispatch(arrGenerator());
  }, [size]);
  return (
    <>
      <div className="body-main-container">
        <div className="bars-container">
          <div className="container red blue active current">
            {arr.map((item, index) => {
              return (
                <div
                  id={`id${index + 1}`}
                  className="bar"
                  style={{
                    width: 500 / size + "px",
                    fontSize: 300 / size + "px",
                    height: item.value * 4,
                    transform: `translate(${
                      (600 / size + 5) * index
                    }px, ${0}px)`,
                    transition: `transform ${speed / 1500}s ease`,
                  }}
                >
                  {item.value}
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
