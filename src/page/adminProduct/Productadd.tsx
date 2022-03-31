
import { useForm,SubmitHandler } from 'react-hook-form'
import { ProductType } from '../../types/product'
import { useEffect, useState } from 'react'
import { Category } from '../../types/category'
import { list } from '../../api/category'
type ProductProps = {
    onAdd:(product:ProductType)=>void
}
type FormInput={
    name:string,
    price:number,
    img:string,
    quantity:number,
    category:number,
    discount:number,
    model:number,
    desc:string
}
const Productadd = (props: ProductProps) => {
  const [cate,getcate]=useState<Category[]>([])
  useEffect(()=>{ 
   const cate=async()=>{
   const {data} = await list();
   
   getcate(data)
   }
   cate()
  },[])
  
   
    const {register,handleSubmit,formState:{errors}}=useForm<FormInput>();
    const onSubmit:SubmitHandler<FormInput>=data=>{
      console.log(data)
       props.onAdd(data)
    
    }
  return (
    <div>
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
    <input type="text" className="form-control" id="name" {...register('discount')}  />
  </div>
  <div className="form-group"  >
  <label htmlFor="exampleInputEmail1">Model</label>
    <select {...register('model')} id="">
      <option value="0">Nữ</option>
      <option value="1">Nam</option>
    </select>
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

    </div>
  )
}

export default Productadd