import React from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'
import { Category } from '../../types/category'
type TypeProps = {
    onAdd:(category:Category)=>void
}
type FormInput={
    name:string,
}
const Cateadd = (props: TypeProps) => {
  
    const {register,handleSubmit,formState:{errors}}=useForm<FormInput>();
    const onSubmit:SubmitHandler<FormInput>=data=>{
       props.onAdd(data)
    }
  return (
    <div>
      <h1 className='font-bold text-3xl my-2 text-center'>Thêm mới danh mục</h1>
     <form className='w-11/12 m-auto' onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="name" {...register('name')}  />
  </div>
  <button type="submit" className="btn btn-primary bg-black my-3">Thêm mới</button>
</form>

    </div>
  )
}

export default Cateadd