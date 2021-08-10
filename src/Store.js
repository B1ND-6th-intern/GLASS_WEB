import { configureStore } from "@reduxjs/toolkit";

const UOn = "USERON";
const UOff = "USEROFF";

userOn = (state) => {
  return {
    type: UOn,
    state,
  };
};

userOff = (state) => {
  return {
    type: UOff,
    state,
  };
};

const formStateModifier = (state, action) => {
  switch (action.type) {
    case UOn:
      state = action.state;
      return !state;

    case UOff:
      state = action.state;
      return !state;
  }
};

const formStateStore = configureStore(formStateModifier);

export default formStateStore;
