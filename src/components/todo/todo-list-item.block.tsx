import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateTodo } from "../../store/actions/todo.actions";
import { todoByIdSelector } from "../../store/selectors/todo.selectors";

import type { ReduxState } from "../../@types/state.types";

import "./todo-list.style.css";

type Props = {
  id: string;
};

const TodoListItem = memo(function TodoListItemComponent(props: Props) {
  const { id } = props;
  const dispatch = useDispatch();
  const todo = useSelector((state: ReduxState) => todoByIdSelector(state, id));

  const handleCompletedChanged = (id: string, isComplete: boolean) => {
    dispatch(updateTodo(id, isComplete));
  };

  const isOverdue =
    todo &&
    !todo.isComplete &&
    todo.dueDate &&
    Date.now() > Date.parse(todo.dueDate);

  return todo ? (
    <li
      className={`todo-item ${todo.isComplete ? "todo-item_complete" : ""} ${
        isOverdue && !todo.isComplete ? "todo-item_overdue" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => handleCompletedChanged(todo.id, !todo.isComplete)}
      />
      <span className="todo-item__name">{todo.description}</span>
      {todo.dueDate ? (
        <span className="todo-item__due-date">
          {new Date(todo.dueDate).toLocaleDateString()}
        </span>
      ) : null}
    </li>
  ) : null;
});

export default TodoListItem;
