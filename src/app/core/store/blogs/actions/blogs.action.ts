import { createAction, props } from "@ngrx/store";
import { IBlog } from "../../../../libs/components";

export const showInDetailAction = createAction('[Blogs] show in detail');

export const setPopularBlog = createAction(
  '[Blogs] set popular blog',
  props<{ popularBlog: number }>()
);

export const loadBlogs = createAction(
  '[Blogs] load blogs'
)

export const loadBlogsSuccess = createAction(
  '[Blogs] load blogs success',
  props<{ blogs: IBlog[]}>()
)

export const loadBlogsError = createAction(
  '[Blogs] load blogs error',
  props<{ error: string}>()
)

export const loadPopularBlogs = createAction(
  '[Blogs] load popular blogs'
)

export const loadPopularBlogsSuccess = createAction(
  '[Blogs] load popular blogs success',
  props<{ popularBlogs: IBlog[]}>()
)

export const loadPopularBlogsError = createAction(
  '[Blogs] load popular blogs error',
  props<{ error: string}>()
)
