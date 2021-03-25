import { GET_TODOS, UPD_TODO } from "../consts/todo.consts";
import { getData, updateData } from "../../api/api";

import { GET_URL, PATCH_URL } from "../../api/api.consts";
import { setLoading } from "./ui.actions";

export async function getTodos(dispatch: (payload: unknown) => unknown) {
    try {
        dispatch(setLoading(true));
        const result = await getData(GET_URL);

        if (result) {
            dispatch({
                type: GET_TODOS,
                payload: result,
            });
        }
    } catch (error) {
        console.log("getTodos error");
    } finally {
        dispatch(setLoading(false));
    }
}

export function updateTodo(todoId: string, isComplete: boolean) {
    return async (dispatch: (payload: unknown) => unknown) => {
        try {
            dispatch(setLoading(true));
            const result = await updateData(`${PATCH_URL}/${todoId}`, {
                isComplete,
            });

            if (result.status === "success") {
                dispatch({
                    type: UPD_TODO,
                    payload: { todoId, isComplete },
                });
            }
        } catch (error) {
            console.log("upd TODO error");
        } finally {
            dispatch(setLoading(false));
        }
    };
}
