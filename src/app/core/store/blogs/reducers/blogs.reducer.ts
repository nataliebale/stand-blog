import { createAction, createReducer, on } from "@ngrx/store";

export const blogsReducer = createReducer(
  { showInDetail: true},
  on(createAction('[Blogs] show in detail'), state => {
    return {
      ...state,
      showInDetail: !state.showInDetail
    }
  })
);
