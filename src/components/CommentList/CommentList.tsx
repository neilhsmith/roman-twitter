import { Comment } from "app/app.types";
import styles from "./CommentList.module.css";

type CommentListProps = {
  comments: Comment[];
};

export const CommentList = ({ comments }: CommentListProps) => (
  <div className={styles.comments}>
    <h1 className={styles.commentsTitle}>Comments</h1>
    {comments.map((comment) => (
      <article key={comment.id} className={styles.comment}>
        <h1 className={styles.commentTitle}>{comment.name}</h1>
        <p className={styles.commentContent}>{comment.body}</p>
        <p>By: {comment.email}</p>
      </article>
    ))}
  </div>
);
