import { createAction, props } from "@ngrx/store";
import { ICard } from "../../../../libs/components/card/entity/card.interface";

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
  props<{ blogs: ICard[]}>()
)

export const loadBlogsError = createAction(
  '[Blogs] load blogs error',
  props<{ error: string}>()
)
