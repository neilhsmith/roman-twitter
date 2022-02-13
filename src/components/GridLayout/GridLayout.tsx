import { ReactNode, useState } from "react";
import { useLocalStorage } from "app/app.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import styles from "./GridLayout.module.css";

type LayoutType = "rows" | "grid";

type GridLayoutProps = {
  title?: string;
  items: ReactNode[];
};

export const GridLayout = ({ title, items }: GridLayoutProps) => {
  const [layoutType, setLayoutType] = useLocalStorage<LayoutType>(
    "layoutType",
    "rows"
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${
              layoutType === "rows" ? styles["active"] : ""
            }`}
            onClick={() => setLayoutType("rows")}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <button
            className={`${styles.button} ${
              layoutType === "grid" ? styles["active"] : ""
            }`}
            onClick={() => setLayoutType("grid")}
          >
            <FontAwesomeIcon icon={faGripVertical} size="lg" />
          </button>
        </div>
      </div>
      <div className={`${styles.items} ${styles[layoutType]}`}>
        {items.map((post, idx) => (
          <div key={idx} className={styles.item}>
            {post}
          </div>
        ))}
      </div>
    </div>
  );
};
