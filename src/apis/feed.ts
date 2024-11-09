import { InputPost } from "@/libs/types/feed";
import customFetch from "./customFetch";

const feedService = {
  createPost: (input: InputPost) => {
    return customFetch("/feed/create", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },
  getFeed: () => {
    return customFetch("/feed/get-post");
  },
};

export default feedService;
