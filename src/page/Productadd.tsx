import React from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'
import { ProductType } from '../types/product'
import { useNavigate } from 'react-router-dom'
type ProductProps = {
    onAdd:(product:ProductType)=>void
}
type FormInput={
    name:string,
    price:number,
    img:string,
    quantity:number,
    desc:string
}
const Productadd = (props: ProductProps) => {
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm<FormInput>();
    const onSubmit:SubmitHandler<FormInput>=data=>{
       props.onAdd(data)
       navigate('/admin/product')
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
    <input type="text" className="form-control"  id="name" {...register('img')} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">quantity</label>
    <input type="text" className="form-control" id="name" {...register('quantity')}  />
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