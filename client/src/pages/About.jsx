import { useAuth } from "../store/auth";

export const About=()=>{
    const {user}=useAuth()
    return <h1>Welcome,{user ? ` ${user.username} to our website`  : ` to our Website` }</h1>
}; 