
import { isauthenticate } from '../utils/localstoage';
import instance from './instance';

const {user,token}=isauthenticate() 
export const get = () => {
    const url = `/products`;
    return instance.get(url)
}
export const detail = (cate:number) => {
    const url = `/product/?id=${cate}`;
    console.log(cate);
    
    return instance.get(url)
}
export const getmodel = (id:string|undefined) => {
    const url = `/products/getByModel/${id}`;
    return instance.get(url)
}
export const getone = (id:any) => {
    const url = `/products/${id}`;
    return instance.get(url)
}
export const search=(search_value:string|undefined)=>{
    const url = `/search?q=${search_value}`;
    return instance.post(url)
}
export const add = (product: any) => {
    console.log(user._id)
    const url = `/products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            Authorization:`Bearer ${token}`,
     
        }
    });

}
export const remove = (id:any) => {
    const url = `/products/${id}/${user._id}`;
    return instance.delete(url,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    });
}
export const update = (products:any) => {
    const url = `/products/${products._id}/${user._id}`;
    return instance.put(url,products, {
        headers: {
            Authorization: `Bearer ${token}`,
     
        }
    });
}