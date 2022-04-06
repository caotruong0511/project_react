
let cart:any = [];
if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart")as string);
}

export const increaseQuantity = (id:any,next:any) =>{
    cart.find(item => item._id==id).quantity++;
    localStorage.setItem("cart",JSON.stringify(cart));
    next();
};
export const decreaseQuantity = (id:any, next:any)=>{
    const currentProduct = cart.find(item => item._id==id);
    currentProduct.quantity--;
    if(currentProduct.quantity<1){
        const confirm=window.confirm("Bạn có muốn xóa không");
        if(confirm){
            cart = cart.filter(item=> item._id !==id);
        }else{
            cart.find((e) => e._id == id).quantity = 1;
        }
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    next();
};
export const removeItemInCart= (id,next) =>{
    const confirm =window.confirm("Bạn có muốn xóa không");
    if(confirm){
        cart = cart.filter(item=> item._id !=id);
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    next();
};