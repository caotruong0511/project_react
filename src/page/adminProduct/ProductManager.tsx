import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../../api/Product' 
import { Category } from '../../types/category'
import { ProductType } from '../../types/product'


// type Product=[{
//   _id: number,
//   name: string,
//   price: number,
//   img:String,
//   quantity:Number,
//   desc:String  
// }]
type ProudctManager={
  product:ProductType[],
  onRemove:(_id:string|number)=>void
}
const ProductManager = (props:ProudctManager) => {
  console.log(props.product)
  return (
    <div>
       <Link to="/admin/product/add" className="border border-grey-600 m-8 px-5 py-1 inline-block">Thêm mới</Link>
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
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Discount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Model
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Desc
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                 {props.product?.map((e,index)=>{
                   console.log(e)
                 return (
                       <tr key={index}>
                         <td className="px-6 py-4">
                           {++index}
                         </td>
                         <td className="px-4 py-4">
                           {e.name}
                         </td>
                         <td className="px-4 py-4 w-1/12">
                          <img src={`${e.img}`} alt="" />
                         </td>
                         <td className="px-4 py-4">
                         {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format((e.price))}
                         </td>
                         <td className="px-4 py-4">
                           {e.quantity}
                         </td>
                         <td className="px-4 py-4">
                           {e.discount}
                         </td>
                         <td className="px-4 py-4">
                           {e.category.name}
                         </td>
                         <td className="px-4 py-4">
                           {e.model==1?"Nam":"Nữ"}
                         </td>
                         <td className="px-4 py-4 w-1/5">
                           {e.desc.slice(0,50)}...  
                         </td>
                         <td className="px-4 py-4 text-sm font-bold">
                           <Link to={`/admin/product/${e._id}/edit`}  className="text-indigo-600 hover:text-indigo-900">Edit</Link>
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

export default ProductManager