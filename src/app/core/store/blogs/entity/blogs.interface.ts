import * as AppState from "../../app/entity/app.interface";

export interface IBlogsState{
  showInDetail: boolean;
  popularBlog: number | null;
}

export interface IAppState extends AppState.IAppState{
  blogs: IBlogsState;
}
