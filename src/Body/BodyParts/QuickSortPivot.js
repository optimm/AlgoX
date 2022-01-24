import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { setPivot } from "../../features/SortingSlice";
import { useDispatch, useSelector } from "react-redux";
import "./QuickSortPivot.css";
const QuickSortPivot = () => {
  const dispatch = useDispatch();
  const { pivot, isDisabled } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  return (
    <div className="quick-sort-pivot-body">
      <h2 className="quick-sort-pivot-heading">Pivot Element</h2>
      <div>
        <div className="quick-sort-pivot-checkbox-container">
          <FormControlLabel
            disabled={isDisabled}
            className="quick-sort-pivot-checkbox"
            control={
              <Checkbox
                color="success"
                checked={pivot === 0}
                onClick={() => {
                  dispatch(setPivot(0));
                }}
              />
            }
            label="First"
          />
          <FormControlLabel
            className="quick-sort-pivot-checkbox"
            control={
              <Checkbox
                disabled={isDisabled}
                checked={pivot === 1}
                onClick={() => {
                  dispatch(setPivot(1));
                }}
              />
            }
            label="Last"
          />
        </div>
        <div className="quick-sort-pivot-checkbox-container">
          <FormControlLabel
            disabled={isDisabled}
            className="quick-sort-pivot-checkbox"
            control={
              <Checkbox
                checked={pivot === 2}
                onClick={() => {
                  dispatch(setPivot(2));
                }}
              />
            }
            label="Middle"
          />
          <FormControlLabel
            disabled={isDisabled}
            className="quick-sort-pivot-checkbox"
            control={
              <Checkbox
                checked={pivot === 3}
                onClick={() => {
                  dispatch(setPivot(3));
                }}
              />
            }
            label="Random"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickSortPivot;
