import { Outlet, useNavigate } from "react-router-dom";
import { useToken } from "../companent/Hook";

export function Private() {
  let navigate = useNavigate();
  let [token] = useToken();
  if (token == "QpwL5tke4Pnpja7X4") {
    return <Outlet />
  }
  return navigate("/login")
}
