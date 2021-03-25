import { LOADING } from '../consts/ui.consts'

export const setLoading = (load: boolean) => ({
    type: LOADING,
    payload: load
})