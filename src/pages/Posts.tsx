import { Link } from "react-router-dom";

import { NewLineText } from "components/NewLineText";
import { CardLink } from "components/Card";
import { usePosts } from "app/app.hooks";

export const PostsPage = () => {
  const { isLoading, error, data } = usePosts();

  // todo: handle loading, error, no posts found
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{`An error has occured: ${error.message}`}</p>;
  if (!data) return <p>No posts found...</p>;

  return (
    <>
      {data.map((post) => (
        <CardLink key={post.id} elementType="article" to={`/post/${post.id}`}>
          <h1>{post.title}</h1>
          <NewLineText content={post.body} />
        </CardLink>
      ))}
    </>
  );
};
