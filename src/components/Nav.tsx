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
                <li id="categories" className="inline"><NavLink to="/" className="px-3 text-lg font-semibold py-8">Danh mục</NavLink></li>
                <ul className="sub_menu absolute left-0 z-50 bg-white">
                    {cate?.map((e,index) => {
                        return(
                            <li key={index} className="rounded-md"><NavLink to={`/category/${e._id}`} className="pr-24  py-3 hover:text-red-500 px-5 py-1 block text-lg font-semibold">{e.name}</NavLink></li>
                        )
                    })}
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