import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../Hook";
import "./Login.css";

export function Login() {
  let navigate = useNavigate()
  let [token, setToken] = useToken();

  const HandleSubmit = (evt) => {
    evt.preventDefault();
    let { username, password } = evt.target.elements;

    axios
      .post("https://reqres.in/api/login", {
        email: username.value,
        password: password.value,
      })
      .then((json) => {
        if (json.data.token) {
          setToken(json.data.token);
          navigate("/admin")
        }
      });
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="form">
          <h1>Login in</h1>
          <input type="text" name="username" placeholder="enter email" />
          <input type="password" name="password" placeholder="enter password" />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}
