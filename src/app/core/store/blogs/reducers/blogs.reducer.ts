import { createReducer, on } from "@ngrx/store";
import { IBlogsState } from "../entity/blogs.interface";
import * as BlogsActions from "../actions/blogs.action";

const initialState: IBlogsState = {
  showInDetail: true,
  popularBlog: null,
  blogs: null,
  error: ''
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
  }),
  on(BlogsActions.loadBlogsSuccess, (state, action): IBlogsState => {
    return {
      ...state,
      blogs: action.blogs
    }
  }),
  on(BlogsActions.loadBlogsError, (state, action): IBlogsState => {
    return {
      ...state,
      blogs: [],
      error: action.error
    }
  })
);
