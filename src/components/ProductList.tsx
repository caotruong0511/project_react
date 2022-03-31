import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../types/product'

type ProductProps = {
products:ProductType[];
}

const ProductList = ({products}: ProductProps) => {
  let duration: number = 0;
  const currencyformat = (data: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(data);
  };
  return (
    
    <div className="w-5/6 m-auto ">
  <div>
    
  </div>


    <h2 className="font-bold text-3xl  my-10 "> SẢN PHẨM MỚI </h2>
    <div className="grid grid-cols-4 gap-11">
        {products?.map((e,index)=>{
         duration += 100;
        return (
          <div
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay={`${duration}`}
                data-aos-duration="200"
                key={index}
                className="border border-black py-10"
              >
                <img src={`${e.img}`} alt="" className="w-3/4 m-auto" />
                <h1 className="font-semibold w-3/4 m-auto text-center mt-2">
                  {e.name}
                </h1>
                <div className="flex mt-4 justify-around">
                  <p className="text-red-500 font-bold">
                    {currencyformat(e.price - (e.price * e.discount) / 100)}
                  </p>
                  <del className="text-sm">
                    {e.discount > 0 ? currencyformat(e.price) : ""}
                  </del>
                </div>
                <Link to={`/product/${e._id}`} className=""><button className="border border-black w-11/12 m-auto block mt-3 bg-red-500 text-white font-bold py-1">
                  Xem ngay
                </button></Link>
                
              </div>
              
        )
        })}
       
        </div>
        
    </div>
  )
}

export default ProductList