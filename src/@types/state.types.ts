export type TodoType = {
  id: string;
  description: string;
  isComplete: boolean;
  dueDate: string | null;
};

export type ReduxState = {
  todos: Array<TodoType>;
  ui: {
    isLoading: boolean;
  };
};
