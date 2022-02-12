import { useQuery } from "react-query";
import { Post, Comment } from "app/app.types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const usePosts = () => {
  return useQuery<Post[], Error>("posts", async () => {
    const res = await fetch(`${BASE_URL}/posts`);

    if (!res.ok) throw new Error("Error...");

    return res.json();
  });
};
