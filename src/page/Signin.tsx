import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { signin, signup } from '../api/auth'
import { UserType } from '../types/user'
import { authenticate } from '../utils/localstoage'
import "../assets/css/home.css"
import toastr from "toastr";
import "toastr/build/toastr.min.css";
type UserProps = {
   
}
type FormInput={
 
    email:string,
    password:string
}
const Signin = (props: UserProps)=> {
  const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm<FormInput>();
    const onSubmit:SubmitHandler<FormInput>=async data=>{
      const {data:user}=await signin(data);
      authenticate(user,()=>{
      if(user.user.roll!=2){
        setTimeout(()=>{
          toastr.success("Đăng nhập thành công")
          navigate("/")
        },1000)
       
      }
      else{
        setTimeout(()=>{
          toastr.success("Đăng nhập thành công")
          navigate("/admin")
        },1000)
      }

      })
    }
  return (
 <div className="signin min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="" alt="Workflow" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
        Sign In
      </h2>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST" id="formsingUp" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input {...register('email')} type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" {...register('password')} name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
        {/* <div>
          <label htmlFor="password" className="sr-only">RePassword</label>
          <input id="repassword" name="repassword" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="RePassword" />
        </div> */}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-white focus:ring-indigo-500 border-gray-300 rounded" />
          <label htmlFor="remember-me" className=" ml-2 block text-sm text-white">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-white hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* Heroicon name: solid/lock-closed */}
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Sign In
        </button>
      </div>
      <div className='and'>
        Hoặc
      </div>
      <div className='text-center text-white'>
        <span>Bạn chưa là thành viên? 
<Link to="/signup" className='underline decoration-1 text-blue-500 ' > Đăng kí</Link> ngay</span>
      </div>
    </form>
  </div>
</div>

  )
}

export default Signin