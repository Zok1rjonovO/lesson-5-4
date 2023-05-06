import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Comments.css"

export function Comments({ userData }) {
  let [Data, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((json) => setUserData(json.data));
  }, []);

  return (
    <>
      <ul className="ulC">
        {Data.map((user, index) => (
          <li className="liC" key={index}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <h3>{user.body}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
