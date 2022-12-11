import { createReducer, on } from "@ngrx/store";
import { IBlogsState } from "../entity/blogs.interface";
import * as BlogsActions from "../actions/blogs.action";

const initialState: IBlogsState = {
  showInDetail: true,
  popularBlog: null
}

export const blogsReducer = createReducer<IBlogsState>(
  initialState,
  on(BlogsActions.showInDetailAction, (state): IBlogsState => {
    return {
      ...state,
      showInDetail: !state.showInDetail
    }
  }),
  on(BlogsActions.setPopularBlog, (state, action): IBlogsState => {
    let popularBlogId: number | null = action.popularBlog;
    if(state.popularBlog === action.popularBlog) popularBlogId = null;
    return {
      ...state,
      popularBlog: popularBlogId
    }
  })
);
