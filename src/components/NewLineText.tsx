type NewLineTextProps = {
  content: string;
};

export const NewLineText = ({ content }: NewLineTextProps) => {
  const text = content.split("\n").map((str, i) => <p key={i}>{str}</p>);

  return <>{text}</>;
};
