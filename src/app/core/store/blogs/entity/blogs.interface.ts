import * as AppState from "../../app/entity/app.interface";
import { IBlog } from "../../../../libs/components/card/entity/card.interface";

export interface IBlogsState{
  showInDetail: boolean;
  popularBlog: number | null;
  blogs: IBlog[] | null;
  error: string;
}

export interface IAppState extends AppState.IAppState{
  blogs: IBlogsState;
}
