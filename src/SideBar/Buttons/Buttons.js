import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Insertion_sort from "../../Algorithms/insertion_sort";
import Bubble_sort from "../../Algorithms/Bubble_sort";
import Selection_sort from "../../Algorithms/selection";
import Merge_sort from "../../Algorithms/merge_sort";
import Quick_sort from "../../Algorithms/quick_sort";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsDisabled,
  arrGenerator,
  setArr,
  setAlgo,
} from "../../features/SortingSlice";
import "./Buttons.css";
const options = [
  "Insertion Sort",
  "Bubble Sort",
  "Selection Sort",
  "Merge Sort",
  "Quick Sort",
];

export default function SplitButton() {
  const dispatch = useDispatch();
  const { arr, speed, isDisabled, pivot, algo } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const setDisabled = (val) => {
    dispatch(setIsDisabled(val));
  };
  const handleClick = async () => {
    setDisabled(true);
    algo === 0 && (await Insertion_sort([...arr], speed, setDisabled));
    algo === 1 && (await Bubble_sort([...arr], speed, setDisabled));
    algo === 2 && (await Selection_sort([...arr], speed, setDisabled));
    algo === 3 && (await Merge_sort([...arr], speed, setDisabled));
    algo === 4 && (await Quick_sort([...arr], speed, setDisabled, pivot));
    let arrCopy = [...arr];
    let tempArr = [];
    arrCopy.forEach((element) => {
      tempArr.push(element.value);
    });
    tempArr.sort();
    console.log(tempArr);
    dispatch(setArr(tempArr));
  };

  const handleMenuItemClick = (event, index) => {
    dispatch(setAlgo(index));
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div>
        <ButtonGroup
          color="success"
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button
            style={{
              color: isDisabled ? "white" : "black",
              border: isDisabled && "1px solid white",
            }}
            onClick={handleClick}
            disabled={isDisabled}
          >
            {options[algo]}
          </Button>
          <Button
            color="success"
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            style={{ color: "white", border: isDisabled && "1px solid white" }}
            onClick={handleToggle}
            disabled={isDisabled}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          style={{ color: "black", zIndex: 1 }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList style={{ color: "black" }} id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        style={{
                          backgroundColor: index === algo ? "#2e7d32" : "",
                        }}
                        selected={index === algo}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <div className="generate-new-array-btn-container">
        <Button
          onClick={() => {
            dispatch(arrGenerator());
          }}
          disabled={isDisabled}
          style={{ color: "white", border: isDisabled && "1px solid white" }}
          color="primary"
          variant="contained"
        >
          Generate New Array
        </Button>
        <Button
          style={{ color: "white", marginLeft: 10 }}
          onClick={() => {
            console.log("Clicked....");
          }}
          color="primary"
          variant="contained"
          className="stop-btn"
        >
          Stop
        </Button>
      </div>
    </>
  );
}
