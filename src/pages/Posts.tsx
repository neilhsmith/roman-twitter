import { PostList } from "components/PostList";
import { usePosts } from "app/app.hooks";

export const PostsPage = () => {
  const { isLoading, error, data } = usePosts();

  // todo: handle loading, error, no posts found
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{`An error has occured: ${error.message}`}</p>;
  if (!data) return <p>No posts found...</p>;

  return <PostList title="All Posts" posts={data} />;
};
