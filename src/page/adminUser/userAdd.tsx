
import { useForm,SubmitHandler } from 'react-hook-form'
import { UserType } from '../../types/user'

type ProductProps = {
    onAdd:(user:UserType)=>void
}
type FormInput={
    name:string,
    email:string,
    password:string,
    roll:number
}
const Useradd = (props: ProductProps) => {

  
 
    const {register,handleSubmit,formState:{errors}}=useForm<FormInput>();
    const onSubmit:SubmitHandler<FormInput>=data=>{
       props.onAdd(data)
      
    }
  return (
    <div>
      <h1 className='font-bold text-3xl my-2 text-center'>Thêm mới tài khoản </h1>
     <form className='w-11/12 m-auto' onSubmit={handleSubmit(onSubmit)}>
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
   <select className="form-control" id="" {...register('roll')}>
       <option value="">"Mời bạn chọn quyền"</option>
       <option value="2">Admin</option>
       <option value="1">Khách hàng</option>

   </select>
  </div>
  <button type="submit" className="btn btn-primary bg-black">Thêm mới</button>
</form>

    </div>
  )
}

export default Useradd