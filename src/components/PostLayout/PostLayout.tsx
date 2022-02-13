import { ReactNode, useState } from "react";
import { useLocalStorage } from "app/app.hooks";
import styles from "./PostLayout.module.css";

type LayoutType = "rows" | "grid";

type PostLayoutProps = {
  posts: ReactNode[];
};

export const PostLayout = ({ posts }: PostLayoutProps) => {
  const [storedValue, setValue] = useLocalStorage<LayoutType>(
    "layoutType",
    "rows"
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button onClick={() => setValue("rows")}>1</button>
          <button onClick={() => setValue("grid")}>2</button>
        </div>
      </div>
      <div className={`${styles.items} ${styles[storedValue]}`}>
        {posts.map((post) => (
          <div className={styles.item}>{post}</div>
        ))}
      </div>
    </div>
  );
};
