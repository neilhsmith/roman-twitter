import { useMatch } from "react-router-dom";
import { usePosts } from "app/app.hooks";
import { CardLink } from "components/Card";
import { NewLineText } from "components/NewLineText";

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
    <>
      {posts.map((post) => (
        <CardLink key={post.id} elementType="article" to={`/post/${post.id}`}>
          <h1>{post.title}</h1>
          <NewLineText content={post.body} />
        </CardLink>
      ))}
    </>
  );
};
