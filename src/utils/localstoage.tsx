import { UserType } from "../types/user";

export const isauthenticate=()=>{
    if(!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string)
}
export const authenticate=(user:UserType,next:()=>void)=>{
    localStorage.setItem('user',JSON.stringify(user))
next();
}