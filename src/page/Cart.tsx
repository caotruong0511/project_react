import React, { useEffect, useState } from "react";
import { ProductType } from "../types/product";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
type Props = {};

const Cart = (props: Props) => {
  const [cart, setcart] = useState<ProductType[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") as string);
    setcart(data);
  }, []);
  const increase = (id: any) => {
    increaseQuantity(id, () => {
      toastr.success("Tăng số lượng thành công");
      const data = JSON.parse(localStorage.getItem("cart") as string);
      setcart(data);
    });
  };
  const decrease = (id: any) => {
    decreaseQuantity(id, () => {
      console.log(id);
      
      toastr.success("Giảm số lượng thành công");
      const data = JSON.parse(localStorage.getItem("cart") as string);
      setcart(data);
    });
  };
  let tong_tien = 0;
  cart.forEach((e: any) => {
    const thanh_tien = e.price * e.quantity;
    tong_tien += thanh_tien;
  });

  const onremove =(id:any)=>{
    removeItemInCart(id,()=>{
      toastr.success("Xóa thành công");
    })

  }

  return (
    <div className=" bg-gray-300 w-full">
      <div className="py-12 w-full">
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl ">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <div className="md:grid md:grid-cols-2 gap-2 ">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-medium ">Shopping Cart</h1>
                  <form>
                  {cart?.map((e: any, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-center mt-6 pt-6 border-t"
                      >
                        <div className="flex ">
                          {" "}
                          <img
                            src={`${e.img}`}
                            width={60}
                            className="rounded-full "
                          />
                          <div className="flex flex-col ml-3 ">
                            {" "}
                            <span className="text-md font-medium">
                              {e.name}
                            </span>{" "}
                            <button 
                            onClick={()=>onremove(e._id)}
                            className="btn btn-remove">
                              Remove
                            </button>{" "}
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="pr-8 flex">
                            
                            <button
                            onClick={()=>decrease(e._id)}
                              className="btn btn-decrease"
                            
                            >
                              -
                            </button>{" "}
                            <input
                              type="text"
                              className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-1 mx-2"
                              value={`${e.quantity}`}
                            />
                            <button
                              onClick={() => increase(e._id)}
                              className="btn btn-increase"
                            >
                              +
                            </button>
                          </div>
                          <div className="pr-8">
                            {" "}
                            <span className="text-xs font-medium">
                              {e.price * e.quantity}
                            </span>{" "}
                          </div>
                          {/* <div> <i className='fa fa-close text-xs font-medium'></i> </div> */}
                        </div>
                      </div>
                    );
                  })}
                  </form>

                  <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <div className="flex items-center">
                      {" "}
                      <i className="fa fa-arrow-left text-sm pr-2" />{" "}
                      <span className="text-md font-medium text-blue-500">
                        Continue Shopping
                      </span>{" "}
                    </div>
                    <div className="flex justify-center items-end">
                      {" "}
                      <span className="text-sm font-medium text-gray-400 mr-1">
                        Tổng tiền:
                      </span>{" "}
                      <span className="text-lg font-bold text-gray-800 ">
                        {tong_tien}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
