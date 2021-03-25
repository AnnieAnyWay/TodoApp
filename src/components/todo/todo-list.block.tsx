import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTodos } from "../../store/actions/todo.actions";
import TodoListItem from "./todo-list-item.block";
import Loader from "../loader/loader.block";
import { loaderSelector } from "../../store/selectors/ui.selectors";
import { sortedTodoIdsSelector } from "../../store/selectors/todo.selectors";

import "./todo-list.style.css";

function TodoList() {
  const dispatch = useDispatch();
  const todoIds = useSelector(sortedTodoIdsSelector);
  const isLoading = useSelector(loaderSelector);

  useEffect(() => {
    dispatch(getTodos);
  }, [dispatch]);

  return (
    <React.Fragment>
      {todoIds.length ? (
        <ul className="todo-list">
          {todoIds.map((id) => (
            <TodoListItem id={id} key={id} />
          ))}
        </ul>
      ) : null}
      {isLoading ? <Loader /> : null}
    </React.Fragment>
  );
}

export default TodoList;
