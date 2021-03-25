import { combineReducers } from "redux";

import { todos } from "./todo.reducer";
import { ui } from "./ui.reducer";

export const initialState = {
  todos: [],
  ui: { isLoading: false },
};

const rootReducer = combineReducers({
  ui,
  todos,
});

export default rootReducer;
