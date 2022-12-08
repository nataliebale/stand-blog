import { createAction, createReducer, on } from "@ngrx/store";
import { IBlogsState } from "../entity/blogs.interface";
import { showInDetailAction } from "../actions/blogs.action";

const initialState: IBlogsState = {
  showInDetail: true
}

export const blogsReducer = createReducer<IBlogsState>(
  initialState,
  on(showInDetailAction, (state): IBlogsState => {
    return {
      ...state,
      showInDetail: !state.showInDetail
    }
  })
);
