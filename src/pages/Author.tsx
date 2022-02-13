import { useMatch } from "react-router-dom";
import { PostLayout } from "components/PostLayout";
import { CardLink } from "components/Card";
import { NewLineText } from "components/NewLineText";
import { usePosts } from "app/app.hooks";

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

  return (
    <PostLayout
      posts={posts.map((post) => (
        <CardLink key={post.id} elementType="article" to={`/post/${post.id}`}>
          <h1>{post.title}</h1>
          <NewLineText content={post.body} />
        </CardLink>
      ))}
    />
  );
};
