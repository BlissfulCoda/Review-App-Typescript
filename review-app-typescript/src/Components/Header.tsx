import { Link } from "react-router-dom";
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
    <Link to="/">
      <header style={HeaderStyles} className="header">
        <h2>{title}</h2>
      </header>
    </Link>
  );
}
Header.defaultProps = {
  title: "Review App",
  bgColor: "blue",
  textColor: "white",
};
