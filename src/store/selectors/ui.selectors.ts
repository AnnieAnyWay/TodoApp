import type { ReduxState } from "../../@types/state.types";

export const loaderSelector = (state: ReduxState): boolean =>
  state.ui.isLoading;
