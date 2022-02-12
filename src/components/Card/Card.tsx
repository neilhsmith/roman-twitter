import { ReactNode } from "react";

import styles from "./Card.module.css";

export type CardProps = {
  elementType: "article" | "section" | "div";
  children: ReactNode;
};

export const Card = ({ elementType, children }: CardProps) => {
  const Element = elementType;

  return <Element className={styles.wrapper}>{children}</Element>;
};
