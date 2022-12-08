import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBlogsState } from "../entity/blogs.interface";

const getBlogsFeatureState = createFeatureSelector<IBlogsState>('blogs');

export const getShowInDetail = createSelector(
  getBlogsFeatureState,
    state => state.showInDetail
);
