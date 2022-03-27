import React, { useEffect } from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'

import { useNavigate, useParams } from 'react-router-dom'
import { getone } from '../../api/category'
import { Category } from '../../types/category'
type TypeProps = {
    onUpdate:(category:Category)=>void
}
type FormInput={
    name:string,
}
const Cateedit = (props: TypeProps) => {
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors},reset}=useForm<FormInput>();
    const {id} = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getone(id);
            
            reset(data.category)
        }
        getProduct();
    },[]);

    const onSubmit:SubmitHandler<FormInput>=data=>{
       props.onUpdate(data)
      // console.log(data);

    //    navigate('/admin/categories')
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

export default Cateedit