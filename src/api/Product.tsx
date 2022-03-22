import instance from './instance';

export const get = () => {
    const url = `/products`;
    return instance.get(url)
}
export const getone = (id:any) => {
    const url = `/products/${id}`;
    return instance.get(url)
}
export const add = (product: any) => {
    const url = `/products`;
    return instance.post(url, product);
}