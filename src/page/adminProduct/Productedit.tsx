import React, { useEffect, useState } from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { list } from '../../api/category'
import { getone,get } from '../../api/Product'
import { Category } from '../../types/category'

import { ProductType } from '../../types/product'

type ProducteditProps = {
  onUpdate:(products:ProductType)=>void
}
type FormInput ={
    name:string,
    price:number,
    img:string,
    quantity:number,
    discount:number,
    model:number,
   category:number|string|undefined,

    desc:string
}

const Productedit = (props: ProducteditProps ) => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors},reset}= useForm<FormInput>()
    const [cate,getcate]=useState<Category[]>([])
  useEffect(()=>{ 
   const cate=async()=>{
   const {data} = await list();
   getcate(data)
   }
   cate()
  },[])


    const {id} = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getone(id);
            reset(data)
        }
        getProduct();
    },[]);
    const onSubmit:SubmitHandler<FormInput> =data=>{
      props.onUpdate(data)
      
    }
    
  return (
    <div>
      <h1 className='font-bold text-3xl my-2 text-center'>Cập nhật sản phẩm</h1>
    <form className='w-11/12 m-auto ' onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="name" {...register('name')}  />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">price</label>
    <input type="text" className="form-control" id="name" {...register('price')}  />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">img</label>
    <input type="file" className="form-control"  id="name" {...register('img')} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">quantity</label>
    <input type="text" className="form-control" id="name" {...register('quantity')}  />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">discount</label>
    <input type="text" className="form-control" id="name" {...register('discount')} />
  </div>
  <div className="form-group"  >
  <label htmlFor="exampleInputEmail1">Model</label>
    <select className="form-control"  {...register('model')} id="">
    <option value="0">Nữ</option>
      <option value="1">Nam</option>
      <option value="2">Đôi</option>
    </select>
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">category</label>
   <select className="form-control"{...register('category')} id="">
     <option value="">--Chọn danh mục--</option>
    {cate?.map((e,index)=>{
      return(
        <option key={index} value={`${e._id}`}>{e.name}</option>
      )
    })}
   </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">desc</label>
    <input type="text" className="form-control" id="name" {...register('desc')} />
  </div>
 
  <button type="submit" className="btn btn-primary bg-black my-3">Cập nhật</button>
</form>
</div>
  )
}

export default Productedit