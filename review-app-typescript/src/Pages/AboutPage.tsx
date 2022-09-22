import { Link } from "react-router-dom";

import Card from "../Components/Shared/Card";

export default function AboutPage(): JSX.Element {
  return (
    <Card>
      <div className="about">
        <h5>About Page</h5>
        <Link to="/">Back to homepage</Link>
      </div>
    </Card>
  );
}
