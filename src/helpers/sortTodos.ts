import type { TodoType } from "../@types/state.types";

export default function sortTodos(todos: Array<TodoType>): Array<string> {
  const now = Date.now();

  const sortedTodosWithDate = todos
    .filter((todo) => todo.dueDate)
    .sort((a, b) => {
      const A = a.dueDate;
      const B = b.dueDate;
      if (A && B) {
        return new Date(A).getTime() - new Date(B).getTime();
      }
      return -1;
    });
  const todosWithoutDate = todos.filter((todo) => !todo.dueDate);

  return sortedTodosWithDate
    .concat(todosWithoutDate)
    .map((todo) => {
      if (!todo.isComplete && todo.dueDate && Date.parse(todo.dueDate) < now) {
        return { ...todo, isOverdue: true };
      }
      return { ...todo, isOverdue: false };
    })
    .sort((a, b) => {
      if (a.isOverdue && !b.isOverdue) {
        return -1;
      } else if (!a.isOverdue && b.isOverdue) {
        return 1;
      } else if (!a.isComplete && b.isComplete) {
        return -1;
      } else if (a.isComplete && !b.isComplete) {
        return 1;
      }

      return 0;
    })
    .map((todo) => todo.id);
}
