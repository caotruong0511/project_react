import instance from './instance';

export const list = () => {
    const url = `/category`;
    return instance.get(url)
}
export const getone = (id:any) => {
    const url = `/category/${id}`;
    return instance.get(url)
}
export const addcate = (category: any) => {
    const url = `/category`;
    return instance.post(url,category);
}
export const removecate = (id:any) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}
export const updateCate = (category:any) => {
    const url = `/category/${category._id}`;
    return instance.put(url,category);
}
