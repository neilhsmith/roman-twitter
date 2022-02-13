import { PostLayout } from "components/PostLayout";
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
    <PostLayout
      title="All Posts"
      posts={data.map((post) => (
        <CardLink key={post.id} elementType="article" to={`/post/${post.id}`}>
          {{
            header: <h1>{post.title}</h1>,
            content: <NewLineText content={post.body} />,
          }}
        </CardLink>
      ))}
    />
  );
};
