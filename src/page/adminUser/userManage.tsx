import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { UserType } from '../../types/user'



// type Product=[{
//   _id: number,
//   name: string,
//   price: number,
//   img:String,
//   quantity:Number,
//   desc:String  
// }]
type UserManager={
  user:UserType[];
  onRemove:(id:number|string)=>void
}
const UserManage = (props:UserManager) => {
  console.log(props.user)
 
  return (
    <div>
       <Link to="/admin/user/add" className="border border-grey-600 m-8 px-5 py-1 inline-block">Thêm mới</Link>
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto max-w-9sm m-auto">
          <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Password
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                 {props.user?.map((e,index)=>{
                 return (
                       <tr key={index}>
                         <td className="px-6 py-4">
                           {++index}
                         </td>
                         <td className="px-4 py-4">
                           {e.name}
                         </td>
                         <td className="px-4 py-4">
                           {e.email}
                         </td>
                         <td className="px-4 py-4">
                           {e.password}
                         </td>
                         <td className="px-4 py-4 text-sm font-bold">
                           <Link to={`/admin/user/${e._id}/edit`}  className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                           <span className="text-indigo-600 hover:text-indigo-900">|</span>
                          <button onClick={()=>props.onRemove(e._id)} id="btndel">Xóa</button>
                          </td>
                       </tr>
                 )
                       })}
                   
  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManage