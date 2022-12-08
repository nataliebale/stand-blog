import * as AppState from "../../app/entity/app.interface";

export interface IBlogsState{
  showInDetail: boolean;
}

export interface IAppState extends AppState.IAppState{
  blogs: IBlogsState;
}
