import { GET_TODOS, UPD_TODO } from "../consts/todo.consts";
import type { TodoType } from "../../@types/state.types";

export const todos = (
    state: Array<TodoType> = [],
    action: {
        type: string;
        payload: any;
    }
) => {
    switch (action.type) {
        case GET_TODOS:
            return action.payload;
        case UPD_TODO:
            const { todoId, isComplete } = action.payload;
            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    isComplete,
                };
            });
        default:
            return state;
    }
};
