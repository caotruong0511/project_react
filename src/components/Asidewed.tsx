import React, { useEffect, useState } from 'react'
import { list } from '../api/category'
import "../assets/css/home.css"
import { Category } from '../types/category'
type Props = {}

const Asidewed = (props: Props) => {
  const [cate,setcate]=useState<Category[]>([])
  useEffect(()=>{
      const cate=async()=>{
      const {data}=await list()
      setcate(data)
      }
      cate()
  },[])
  return (
    <div >
    <aside className="filter ">
  <form className='py-3'>
    <h3 className='pt-3'>Khoảng Giá</h3>
    <div className="filter_by_price">
      <input id="min_price" className='border border-2' autoComplete="off" type="number" name="min_price" placeholder="Từ" />
      <input id="max_price" className='border border-2' autoComplete="off" type="number" name="max_price" placeholder="Đến" />
    </div>
    <div className="filter">
      <button type='button'></button>
    </div>
    <h3>Theo thương hiệu</h3>
    <div className="filter_by_brand">
      <div className ='brand' >
        {cate?.map((e,index)=>{
          return(
            <div key={index} >
            <input  type="checkbox" id={`${e._id}`} />
            {e.name}
            </div>
          )
  
        })}
      
      </div>
    </div>
    <h3>Theo giới tính</h3> <br />
    <div className="gender ">
      <input id="nam" type="checkbox" name="gender" defaultValue={1} /> <span>Nam</span> 
      <input id="nu" type="checkbox" name="gender" defaultValue={0} /> <span>Nữ</span> 
      <input id="nu" type="checkbox" name="gender" defaultValue={2} /> <span>Đôi</span>
    </div>
  </form>
</aside>

    </div>
  )
}

export default Asidewed