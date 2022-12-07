import { createAction, createReducer, on } from "@ngrx/store";

export const blogsReducer = createReducer(
  { showInDetail: true},
  on(createAction('[Blog] show in detail'), state => {
    return {
      ...state,
      showInDetail: !state.showInDetail
    }
  })
);
