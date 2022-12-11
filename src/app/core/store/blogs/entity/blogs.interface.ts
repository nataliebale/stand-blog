import * as AppState from "../../app/entity/app.interface";
import { ICard } from "../../../../libs/components/card/entity/card.interface";

export interface IBlogsState{
  showInDetail: boolean;
  popularBlog: number | null;
  blogs: ICard[] | null;
}

export interface IAppState extends AppState.IAppState{
  blogs: IBlogsState;
}
