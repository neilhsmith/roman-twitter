import { useMatch, Link } from "react-router-dom";

import { NewLineText } from "components/NewLineText";
import { Card } from "components/Card";
import { usePost, useComments } from "app/app.hooks";

export const PostPage = () => {
  return (
    <article>
      <Post />
      <section>
        <h1>Comments</h1>
        <Comments />
      </section>
    </article>
  );
};

const Post = () => {
  const match = useMatch("/post/:id");
  const postIdParam = match?.params.id || "0"; // todo: handle bad match?
  const postId = +postIdParam;

  const { isLoading, error, data } = usePost(postId);

  // todo: handle loading, error, no posts found
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{`An error has occured: ${error.message}`}</p>;
  if (!data) return <p>No posts found...</p>;

  return (
    <Card elementType="div">
      <header>
        <h1>{data.title}</h1>
        <p>
          By: <Link to={`/author/${data.userId}`}>Author {data.userId}</Link>
        </p>
      </header>
      <NewLineText content={data.body} />
    </Card>
  );
};

const Comments = () => {
  const match = useMatch("/post/:id");
  const postIdParam = match?.params.id || "0"; // todo: handle bad match?
  const postId = +postIdParam;

  const { isLoading, error, data } = useComments(postId);

  // todo: handle loading, error, no posts found
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{`An error has occured: ${error.message}`}</p>;
  if (!data) return <p>No posts found...</p>;

  return (
    <>
      {data.map((comment) => (
        <article key={comment.id}>
          <h1>{comment.name}</h1>
          <p>By: {comment.email}</p>
          <p>{comment.body}</p>
        </article>
      ))}
    </>
  );
};
