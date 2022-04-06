import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { search } from '../api/Product'
import { ProductType } from '../types/product'
import AOS from "aos";
type Props = {}

const Search = (props: Props) => {
  const {search_value} =useParams()
  const [search_ilitial,setsearch] = useState<ProductType[]>([])
  useEffect(()=>{
    const searchs=async()=>{
    const {data} = await search(search_value)
    setsearch(data)
    }
    AOS.init()
    searchs()
  },[search_value])
  const currencyformat = (data: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(data);
  };
  return (
    <div className="w-11/12 m-auto">
          <h2 className="font-bold text-xl  my-2 "> Tìm thấy <span className='font-bold text-2xl my-10'>"{search_ilitial.length}"</span>  sản phẩm </h2>
          <div className="grid grid-cols-4 gap-11">
        {search_ilitial?.map((e,index)=>{
         
        return (
          <div
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="100"
                data-aos-duration="500"
                key={index}
                className="border border-black py-3"
              >
                <img src={`${e.img}`} alt="" className="w-28 m-auto" />
                <h1 className="w-48  m-auto text-center mt-3 text-sm">
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
                <Link to={`/product/${e._id}`} className=""><button className="border border-black w-11/12 m-auto block mt-3 bg-slate-700 text-white  py-1">
                  Xem ngay
                </button></Link>
                
              </div>
              
        )
        })}
       
        </div>
    </div>
  )
}

export default Search