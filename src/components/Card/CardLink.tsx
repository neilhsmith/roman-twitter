import { Link } from "react-router-dom";
import { Card, CardProps } from "./Card";
import styles from "./CardLink.module.css";

type CardLinkProps = CardProps & {
  to: string;
};

export const CardLink = ({ to, children, ...otherProps }: CardLinkProps) => (
  <Link to={to} className={styles.link}>
    <Card {...otherProps}>{children}</Card>
  </Link>
);
