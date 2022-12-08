import { createAction, createReducer, on } from "@ngrx/store";
import { IBlogsState } from "../entity/blogs.interface";

const initialState: IBlogsState = {
  showInDetail: true
}

export const blogsReducer = createReducer<IBlogsState>(
  initialState,
  on(createAction('[Blogs] show in detail'), (state): IBlogsState => {
    return {
      ...state,
      showInDetail: !state.showInDetail
    }
  })
);
