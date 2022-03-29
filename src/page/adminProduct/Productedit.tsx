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
    <form onSubmit={handleSubmit(onSubmit)}>
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
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">category</label>
   <select {...register('category')} id="">
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
 
  <button type="submit" className="btn btn-primary bg-black">Submit</button>
</form>
  )
}

export default Productedit