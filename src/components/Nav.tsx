import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
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
                <li className="inline"><NavLink className="px-3 text-lg font-semibold" to="/">Home Page</NavLink></li>
                <div className='relative inline'>
                <li id="categories" className="inline"><a href="/" className="px-3 text-lg font-semibold py-16">Danh mục</a></li>
                <ul className="sub_menu absolute left-0 z-50 bg-white">
                    {cate?.map((e,index) => {
                        return(
                            <li key={index} className="rounded-md"><a href={`/category/${e._id}`} className="pr-24 py-3 hover:bg-red-500 px-10 py-1 block text-lg font-semibold">{e.name}</a></li>
                        )
                    })}
                </ul>
                </div>
                <li className="inline"><NavLink className="px-3 text-lg font-semibold" to="/product">product</NavLink></li>
                <li className="inline"><a href="/order_manage" className="px-3 text-lg font-semibold">Đơn hàng</a></li>
                <li className="inline"><a href="/" className="px-3 text-lg font-semibold">Bảo hành</a></li>
            </ul>
    </div>
  )
}

export default Nav