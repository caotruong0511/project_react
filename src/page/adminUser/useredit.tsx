
import { useForm,SubmitHandler } from 'react-hook-form'
import { ProductType } from '../../types/product'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UserType } from '../../types/user'
import { getone} from '../../api/user'

type ProductProps = {
    onAdd:(user:UserType)=>void
}
type FormInput={
    name:string,
    email:string,
    password:string,
    roll:number
}
const Useredit = (props: ProductProps) => {
   
    const {id}=useParams()
    const {register,handleSubmit,formState:{errors},reset}=useForm<FormInput>();
    useEffect(()=>{
      const userone=async()=>{
      const {data}= await getone(id);
      reset(data)
      }
      userone()
      },[])
    const onSubmit:SubmitHandler<FormInput>=data=>{
       props.onAdd(data)
     console.log(data)
    }
  return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="name" {...register('name')}  />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input type="text" className="form-control" id="name" {...register('email')}  />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Password</label>
    <input type="text" className="form-control"  id="name" {...register('password')} />
  </div>
  
  <div className="form-group">
   <select id="" {...register('roll')}>
       <option value="">"Mời bạn chọn quyền"</option>
       <option value="2">Admin</option>
       <option value="1">Khách hàng</option>

   </select>
  </div>
  <button type="submit" className="btn btn-primary bg-black">Submit</button>
</form>

    </div>
  )
}

export default Useredit