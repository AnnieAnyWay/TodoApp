import { LOADING } from '../consts/ui.consts'

export const ui = (
    state = {},
    action: {
        type: string;
        payload: unknown;
    },
) => {
    switch (action.type) {
        case LOADING:
            return ({ ...state, isLoading: action.payload });
        default:
            return state;
    }
};