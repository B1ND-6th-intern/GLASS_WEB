import { createReducer } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const userModifyOn = createAction("USERMODIFYON");
const userModifyOff = createAction("USERMODIFYOFF");

const formStateModifier = createReducer(false, {
  [userModifyOn]: (state, action) => {
    state = action.payload;
    return !state;
  },

  [userModifyOff]: (state, action) => {
    state = action.payload;
    return !state;
  },
});

const formStateStore = configureStore({ reducer: formStateModifier });

export const actionCreators = {
  userModifyOn,
  userModifyOff,
};

export default formStateStore;
