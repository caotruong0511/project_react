import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../../api/Product' 
import { Category } from '../../types/category'



// type Product=[{
//   _id: number,
//   name: string,
//   price: number,
//   img:String,
//   quantity:Number,
//   desc:String  
// }]
type ProudctManager={
  category:Category[],
  onRemove:(_id:string|number)=>void
}
const CateManager = (props:ProudctManager) => {
  return (
    <div>
       <Link to="/admin/categories/add" className="border border-grey-600 m-8 px-5 py-1 inline-block">Thêm mới</Link>
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto w-full m-auto">
          <div className="py-2 align-middle  sm:px-6 lg:px-8 w-11/12 m-auto block">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full m-auto">
              <table className=" divide-y divide-gray-200 w-full  m-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Cate name
                    </th>
                  
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                 {props.category?.map((e,index)=>{
                 return (
                       <tr key={index}>
                         <td className="px-6 py-4">
                           {index++}
                         </td>
                         <td className="px-4 py-4">
                           {e.name}
                         </td>
                        
                         <td className="px-4 py-4 text-sm font-bold">
                           <Link to={`/admin/categories/${e._id}/edit`}  className="text-indigo-600 hover:text-indigo-900">Edit</Link>
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

export default CateManager