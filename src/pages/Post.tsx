import { useMatch, Link } from "react-router-dom";

import { NewLineText } from "components/NewLineText";
import { Card } from "components/Card";
import { CommentList } from "components/CommentList";
import { usePost, useComments } from "app/app.hooks";

export const PostPage = () => {
  return (
    <article>
      <Post />
      <Comments />
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
      {{
        header: (
          <header>
            <h1>{data.title}</h1>
          </header>
        ),
        content: <NewLineText content={data.body} />,
        footer: (
          <footer>
            <p>
              By:{" "}
              <Link to={`/author/${data.userId}`}>Author {data.userId}</Link>
            </p>
          </footer>
        ),
      }}
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

  return <CommentList comments={data} />;
};
