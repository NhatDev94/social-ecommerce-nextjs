import { FileUpload } from "./fileUpload";

type Media = {
  url: string;
};

export type FeedType = {
  customer: {
    username: string;
    avatar: string;
  };
  description: string;
  media: Media[];
};

export type InputPost = {
  username: string;
  description: string;
  media: FileUpload[];
};
