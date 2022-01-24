import * as React from "react";
import { Box, Stack } from "@mui/material";
import Slider from "@mui/material/Slider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import { setSize, setSpeed } from "../../features/SortingSlice";
export default function SliderSizes() {
  const { isDisabled, size, speed } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  const dispatch = useDispatch();
  return (
    <Box width={300}>
      <InputLabel style={{ color: "white" }}>Speed</InputLabel>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <RemoveIcon />
        <Slider
          size="large"
          defaultValue={500}
          max={1500}
          min={100}
          aria-label="large"
          valueLabelDisplay="auto"
          disabled={isDisabled}
          value={1500 - speed}
          onChange={(e) => {
            dispatch(setSpeed(1501 - e.target.value));
          }}
        />
        <AddIcon />
      </Stack>
      <InputLabel style={{ color: "white" }}>Size</InputLabel>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <RemoveIcon />
        <Slider
          size="large"
          defaultValue={30}
          max={50}
          min={5}
          aria-label="large"
          valueLabelDisplay="auto"
          disabled={isDisabled}
          value={size}
          onChange={(e) => {
            dispatch(setSize(e.target.value));
            document.querySelector(".container").style.width =
              100 / e.target.value + 5 * e.target.value + 500 + "px";
          }}
        />
        <AddIcon />
      </Stack>
    </Box>
  );
}
