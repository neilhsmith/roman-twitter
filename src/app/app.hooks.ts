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

export const usePost = (postId: number) => {
  return useQuery<Post, Error>(["post", postId], async () => {
    const res = await fetch(`${BASE_URL}/posts/${postId}`);

    if (!res.ok) throw new Error("Error...");

    return res.json();
  });
};

export const useComments = (postId: number) => {
  return useQuery<Comment[], Error>(["comments", postId], async () => {
    const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);

    if (!res.ok) throw new Error("Error...");

    return res.json();
  });
};
