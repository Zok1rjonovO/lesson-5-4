import { Outlet } from "react-router-dom";
import { useToken } from "../companent/Hook";

export function Public(){
    let [token] = useToken();

    if(token){
        return <Outlet/>
    }

    return <Outlet/>
}