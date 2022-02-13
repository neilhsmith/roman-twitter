import { Post } from "app/app.types";
import { PostLayout } from "components/PostLayout";
import { CardLink } from "components/Card";
import { NewLineText } from "components/NewLineText";

type PostLinkProps = {
  title: string;
  posts: Post[];
};

export const PostList = ({ title, posts }: PostLinkProps) => {
  return (
    <PostLayout
      title={title}
      posts={posts.map((post) => (
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
