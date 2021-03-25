import React from "react";
import renderer from "react-test-renderer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer, { initialState } from "../../store/reducers";

import { Provider } from "react-redux";
import App from "../../containers/app/App";
import TodoList from "./todo-list.block";
import TodoListItem from "./todo-list-item.block";

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

const mockedStore = {
  todos: [
    {
      description: "Run NY marathon later",
      dueDate: "2021-03-27T13:30:00.000Z",
      id: "7",
      isComplete: false,
    },
    {
      description: "Run LA marathon",
      dueDate: "2021-03-30T13:30:00.000Z",
      id: "8",
      isComplete: false,
    },
  ],
  ui: { isLoading: false },
};

it("renders correctly when there are no items", () => {
  const store = create();
  const snap = renderer
    .create(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    .toJSON();
  expect(snap).toMatchSnapshot();
});

it("renders correctly with items", () => {
  const store = create(mockedStore);
  const snap = renderer
    .create(
      <Provider store={store}>
        <TodoList />
      </Provider>
    )
    .toJSON();
  expect(snap).toMatchSnapshot();
});

it("renders correctly todo item", () => {
  const store = create(mockedStore);
  const snap = renderer
    .create(
      <Provider store={store}>
        <TodoListItem id={"7"} />
      </Provider>
    )
    .toJSON();
  expect(snap).toMatchSnapshot();
});
