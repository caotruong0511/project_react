
import instance from "./instance";

export const signup=(User:any)=>{
    const url='/signup'
    return instance.post(url,User)
}
export const signin=(User:any)=>{
    const url='/signin'
    return instance.post(url,User)
}