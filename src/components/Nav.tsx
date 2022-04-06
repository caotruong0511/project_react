import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { list } from '../api/category'
import { Category } from '../types/category'

type Props = {}

const Nav = (props: Props) => {
    const [cate,setcate]=useState<Category[]>([])
    useEffect(()=>{
        const cate=async()=>{
        const {data}=await list()
        setcate(data)
        }
        cate()
    },[])
  return (
      <div>
          <ul>
                <li className="inline"><NavLink className="px-3 text-lg font-semibold" to="/">Trang chủ</NavLink></li>
                <div className='relative inline'>
                <li className="inline" id="categories_item"><NavLink className="px-3 my-3 py-5 text-lg font-semibold" to="/product">Sản phẩm<i className="fa-solid fa-caret-down m-2"></i></NavLink></li>
                 <ul className="sub absolute left-0 z-50  bg-white">
                 <div className="v"></div>
                     <li className="rounded-md"><Link   to={`/product/model/1`} className=" hover:text-red-500 px-3 py-2 block text-lg ">Đồng hồ nam </Link></li>
                     <li className="rounded-md"><Link   to={`/product/model/0`} className=" hover:text-red-500 px-3 py-2 block text-lg ">Đồng hồ nữ</Link></li>
                     <li className="rounded-md"><Link   to={`/product/model/2`} className=" hover:text-red-500 px-3 py-2 block text-lg ">Đồng hồ đôi</Link></li>
                     <div className='relative inline'>
                     <li id="categories"  className="inline"><NavLink to="/" className="hover:text-red-500 px-3 py-2 block text-lg">Thương hiệu</NavLink></li>
                <ul className="sub_menu absolute left-40 top-20 z-50 bg-white">
                <div className="l"></div>
                    {cate?.map((e,index) => {
                        return(
                            <li key={index} className="rounded-md"><NavLink to={`/product/category/${e._id}`} className="hover:text-red-500 px-3 py-2 block text-lg">{e.name}</NavLink></li>
                        )
                    })}
                </ul> 
                </div>
                 </ul>
               
                </div>
                <li className="inline"><NavLink className="px-3 text-lg font-semibold" to="/product">Sản phẩm</NavLink></li>
                <li className="inline"><NavLink to="/order_manage" className="px-3 text-lg font-semibold">Đơn hàng</NavLink></li>
                <li className="inline"><NavLink to="/" className="px-3 text-lg font-semibold">Bảo hành</NavLink></li>
            </ul>
    </div>
  )
}

export default Nav