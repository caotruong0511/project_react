import { isauthenticate } from '../utils/localstoage';
import instance from './instance';
const {user,token}=isauthenticate() 
export const list = () => {
    const url = `/category`;
    return instance.get(url)
}
export const getone = (id:any) => {
    const url = `/category/${id}`;
    return instance.get(url)
}
export const addcate = (category: any) => {
    const url = `/category/${user._id}`;
    return instance.post(url,category,{
        headers:{
Authorization:`Bearer ${token}`,
        }
    });
}
export const removecate = (id:any) => {
    const url = `/category/${id}/${user._id}`;
    return instance.delete(url,{
        headers:{
    Authorization:`Bearer ${token}`,
        }
    });
}
export const updateCate = (category:any) => {
    const url = `/category/${category._id}/${user._id}`;
    return instance.put(url,category,{
        headers:{
             Authorization:`Bearer ${token}`,
        }
    });
}
