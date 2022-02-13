import { ReactNode } from "react";

import styles from "./Card.module.css";

export type CardProps = {
  elementType: "article" | "section" | "div";
  children: ReactNode | NamedChildProps;
};

type NamedChildProps = {
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
};

export const Card = ({ elementType, children }: CardProps) => {
  const Element = elementType;

  if (isNamedSlots(children)) {
    const { header, content, footer } = children;

    return (
      <Element className={styles.wrapper}>
        {header && <div className={styles.header}>{header}</div>}
        <div className={styles.content}>{content}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </Element>
    );
  }

  return <Element className={styles.wrapper}>{children}</Element>;
};

const isNamedSlots = (children: any): children is NamedChildProps =>
  typeof children === "object" && "content" in children;
