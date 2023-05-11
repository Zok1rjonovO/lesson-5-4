import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Comments.css";

export function Comments({ userData }) {
  let [Data, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((json) => setUserData(json.data));
  }, []);

  return (
    <>
      <ul className="ulC">
        <Link to={"/"}>go back</Link>
        {Data.map((user, index) => (
          <li className="liC" key={index}>
            <h1>posted by: <i>{user.name}</i></h1>
            <h3>email: {user.email}</h3>
            <h3>{user.body}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
