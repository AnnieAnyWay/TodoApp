import { createSelector } from "reselect";
import sortTodos from "../../helpers/sortTodos";
import type { ReduxState } from "../../@types/state.types";

const todosSelector = (state: ReduxState) => state.todos;

export const sortedTodoIdsSelector = createSelector(todosSelector, (todos) => {
  return sortTodos(todos);
});

const todoId = (state: ReduxState, id: string) => id;

export const todoByIdSelector = createSelector(
  todosSelector,
  todoId,
  (todos, todoId) => {
    return todos.find((todo) => todo.id === todoId);
  }
);
