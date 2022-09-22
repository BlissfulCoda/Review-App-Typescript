import { Link } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";

export default function AboutPageLink(): JSX.Element {
  return (
    <div className="about-link">
      <Link to="/about">
        <AiFillQuestionCircle size={25} />
      </Link>
    </div>
  );
}
