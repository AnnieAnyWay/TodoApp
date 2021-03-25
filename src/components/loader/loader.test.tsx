import React from "react";
import renderer from "react-test-renderer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer, { initialState } from "../../store/reducers";

import { Provider } from "react-redux";
import App from "../../containers/app/App";
import Loader from "./loader.block";

function create(state = {}) {
  return createStore(
    rootReducer,
    {
      ...initialState,
      ...state,
    },
    compose(applyMiddleware(thunkMiddleware))
  );
}

const mockedLoader = {
  todos: [],
  ui: { isLoading: true },
};

it("renders loader", () => {
  const store = create(mockedLoader);
  const snap = renderer
    .create(
      <Provider store={store}>
        <Loader />
      </Provider>
    )
    .toJSON();
  expect(snap).toMatchSnapshot();
});
