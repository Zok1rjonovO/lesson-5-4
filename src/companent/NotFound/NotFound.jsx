import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={"/"}>back to home</Link>
    </>
  );
}