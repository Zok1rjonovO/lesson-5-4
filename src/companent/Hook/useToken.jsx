import { useContext } from "react";
import {tokenContext} from "../ Context/contextToken"

export function useToken(){
    let {token , setToken} = useContext(tokenContext)

    return [token , setToken]
}