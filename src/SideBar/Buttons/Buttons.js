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
import { useSelector, useDispatch } from "react-redux";
import { setIsDisabled, arrGenerator } from "../../features/SortingSlice";
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
  const { arr, speed, isDisabled } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(3);
  const setDisabled = (val) => {
    dispatch(setIsDisabled(val));
  };

  const getArr = async () => {
    return await arr;
  };
  const handleClick = async () => {
    // const sarr = [];
    // console.log(sarr, "SARR");
    selectedIndex === 0 && Insertion_sort(getArr, speed, setDisabled);
    selectedIndex === 1 && Bubble_sort(getArr, speed, setDisabled);
    selectedIndex === 2 && Selection_sort(getArr, speed, setDisabled);
    selectedIndex === 3 && Merge_sort(getArr, speed, setDisabled);
    setDisabled(true);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
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
            style={{ color: isDisabled ? "white" : "black" }}
            onClick={handleClick}
            disabled={isDisabled}
          >
            {options[selectedIndex]}
          </Button>
          <Button
            color="success"
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
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
                          backgroundColor:
                            index === selectedIndex ? "#2e7d32" : "",
                        }}
                        selected={index === selectedIndex}
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
          color="primary"
          variant="contained"
        >
          Generate New Array
        </Button>
      </div>
    </>
  );
}
