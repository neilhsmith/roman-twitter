import { useMatch } from "react-router-dom";
import { usePosts } from "app/app.hooks";
import { PostList } from "components/PostList";

export const AuthorPage = () => {
  const match = useMatch("/author/:id");
  const authorIdParam = match?.params.id || "0"; // todo: handle bad match?
  const authorId = +authorIdParam;

  const { isLoading, error, data } = usePosts();

  // todo: handle loading, error, no posts found
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{`An error has occured: ${error.message}`}</p>;
  if (!data) return <p>No posts found...</p>;

  const posts = data.filter((post) => post.userId === authorId);

  return <PostList title={`Author ${authorId}`} posts={posts} />;
};
