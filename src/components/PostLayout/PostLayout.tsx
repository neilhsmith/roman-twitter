import { ReactNode, useState } from "react";
import styles from "./PostLayout.module.css";

type LayoutType = "rows" | "grid";

type PostLayoutProps = {
  posts: ReactNode[];
};

export const PostLayout = ({ posts }: PostLayoutProps) => {
  const [layoutType, setLayoutType] = useState<LayoutType>("rows");

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
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
