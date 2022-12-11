import { createAction, props } from "@ngrx/store";

export const showInDetailAction = createAction('[Blogs] show in detail');

export const setPopularBlog = createAction(
  '[Blogs] set popular blog',
  props<{ popularBlog: number }>()
);

