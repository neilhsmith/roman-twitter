import { ReactNode, useState } from "react";
import { useLocalStorage } from "app/app.hooks";
import styles from "./PostLayout.module.css";

type LayoutType = "rows" | "grid";

type PostLayoutProps = {
  title?: string;
  posts: ReactNode[];
};

export const PostLayout = ({ title, posts }: PostLayoutProps) => {
  const [layoutType, setLayoutType] = useLocalStorage<LayoutType>(
    "layoutType",
    "rows"
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <div className={styles.buttons}>
          <button onClick={() => setLayoutType("rows")}>1</button>
          <button onClick={() => setLayoutType("grid")}>2</button>
        </div>
      </div>
      <div className={`${styles.items} ${styles[layoutType]}`}>
        {posts.map((post) => (
          <div className={styles.item}>{post}</div>
        ))}
      </div>
    </div>
  );
};
