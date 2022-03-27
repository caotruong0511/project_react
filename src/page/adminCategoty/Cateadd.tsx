import React from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'
import { Category } from '../../types/category'
type TypeProps = {
    onAdd:(category:Category)=>void
}
type FormInput={
    name:string,
}
const Cateadd = (props: TypeProps) => {
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm<FormInput>();
    const onSubmit:SubmitHandler<FormInput>=data=>{
       props.onAdd(data)
       navigate('/admin/categories')
    }
  return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="name" {...register('name')}  />
  </div>
  <button type="submit" className="btn btn-primary bg-black">Submit</button>
</form>

    </div>
  )
}

export default Cateadd