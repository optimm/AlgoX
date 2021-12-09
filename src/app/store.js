import { configureStore } from "@reduxjs/toolkit";
import SortingSlice from "../features/SortingSlice";
export default configureStore({
  reducer: {
    sortingVisualizer: SortingSlice,
  },
});
