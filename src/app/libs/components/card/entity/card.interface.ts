export interface ICard{
  id: number;
  image: string;
  tag: string;
  title: string;
  role: string;
  date: string;
  numOfComments: number;
  description: string;
  showFullDescription?: boolean;
  isPopular?: boolean;
}
