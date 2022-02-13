import { useQuery } from "react-query";
import { Post, Comment } from "app/app.types";
import { useState } from "react";

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

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window == "undefined") return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T | ((value: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);

    if (typeof window !== "undefined")
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
};
