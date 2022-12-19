import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBlogsState } from "../entity/blogs.interface";

const getBlogsFeatureState = createFeatureSelector<IBlogsState>('blogs');

export const getShowInDetail = createSelector(
  getBlogsFeatureState,
  state => state.showInDetail
);

export const getPopularBlog = createSelector(
  getBlogsFeatureState,
  state => state.popularBlog
);

export const getBlogs = createSelector(
  getBlogsFeatureState,
  state => state.blogs
);

export const getError = createSelector(
  getBlogsFeatureState,
  state => state.error
);

export const getPopularBlogs = createSelector(
  getBlogsFeatureState,
  state => state.popularBlogs
)
