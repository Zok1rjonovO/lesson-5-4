import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function Comments({ userData }) {
  let [Data, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((json) => setUserData(json.data.data));
  }, []);

  return (
    <>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>
            <h2>{}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}
