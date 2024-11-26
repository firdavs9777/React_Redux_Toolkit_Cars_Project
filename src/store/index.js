import { configureStore } from "@reduxjs/toolkit";

import { carReducer, addCar, changeSearchTerm, removeCar } from "./slices/carSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer
  }
})
export { store, changeCost, changeName, addCar, changeSearchTerm, removeCar}