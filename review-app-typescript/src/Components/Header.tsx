interface HeaderProp {
  title: string;
  bgColor: string;
  textColor: string;
}

export default function Header({
  title,
  bgColor,
  textColor,
}: HeaderProp): JSX.Element {
  const HeaderStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={HeaderStyles} className="header">
      <h2>Review App</h2>
    </header>
  );
}
Header.defaultProps = {
  title: "Review App",
  bgColor: "blue",
  textColor: "white",
};
