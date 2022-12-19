import * as AppState from "../../app/entity/app.interface";
import { IBlog } from "../../../../libs/components";

export interface IBlogsState{
  showInDetail: boolean;
  popularBlog: number | null;
  blogs: IBlog[] | null;
  popularBlogs: IBlog[] | null;
  error: string;
}

export interface IAppState extends AppState.IAppState{
  blogs: IBlogsState;
}
