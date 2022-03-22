
import { ProductType } from "../types/product";
import instance from "./instance";

export const creat=(Product:ProductType)=>{
    const url=`/products`;
    return instance.post(url,Product);
}
export const list=()=>{
    const url=`/products`;
    return instance.get(url);
}
export const read=(id:Number)=>{
    const url=`/products/${id}`;
    return instance.get(url);
}
export const remove=(id:Number)=>{
    const url=`/products/${id}`;
    return instance.delete(url);
}
export const update=(Product:ProductType)=>{
    const url=`/products/${Product.id}`;
    return instance.put(url,Product);
}