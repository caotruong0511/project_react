import { isauthenticate } from '../utils/localstoage';
import instance from './instance';

const {user,token}=isauthenticate() 
export const getuser = () => {
    const url = `/users`;
    return instance.get(url)
}
export const getone = (id:any) => {
    const url = `/users/${id}`;
    return instance.get(url)
}
export const addusers = (users: any) => {
    const url = `/users/${user._id}`;
    return instance.post(url, users, {
        headers: {
            Authorization: `Bearer ${token}`,
     
        }
    });

}
export const removeuser = (id:any) => {
    const url = `/users/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`,
     
        }
    });
}
export const putusers = (users:any) => {
    const url = `/users/${users._id}/${user._id}`;
    return instance.put(url,users, {
        headers: {
            Authorization: `Bearer ${token}`,
     
        }
    });
}