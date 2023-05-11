import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <nav>
      <div className="nav__list">
        <img
          src="https://sweet-crostata-c3cbb7.netlify.app/static/media/Vector.da262ab373a514629a486eb7cd911c10.svg"
          alt=""
        />
        <h2>6 Suggestions</h2>
        <div className="Sort">
          Sort by :
          <select name="">
            <option value="" selected>
              {" "}
              Most Upvotes
            </option>
            <option value="">Least Upvotes</option>
            <option value="">Most Comments</option>
            <option value="">Least Comments</option>
          </select>
        </div>
      </div>
      <div>
        <Link to={"/Feedback"}>
          <button className="btn">+ Add Feedback</button>
        </Link>
      </div>
      <Link to={"/Login"}>
        <button>Login</button>
      </Link>
    </nav>
  );
}
