interface CardInterface {
  children?: React.ReactNode;
  reverse: boolean;
}

export default function Card({
  children,
  reverse,
}: CardInterface): JSX.Element {
  const cardStyles = {
    backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
    color: reverse ? "#fff" : "#000",
  };
  return (
    <div style={cardStyles} className="card">
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};
