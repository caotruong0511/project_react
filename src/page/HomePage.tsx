import React, { useEffect, useState } from 'react'
import { get } from '../api/Product'
import { ProductType } from '../types/product'

type ProductProps = {
}

const HomePage = (props: ProductProps) => {
   const [product,setproduct]=useState<ProductType[]>([]);
   const [productsale,setproductsale]=useState<ProductType[]>([]);

   const newProduct=async()=>{
    const {data}=await get()
    const newProduct=[];
    for(let i=data.length-5;i<data.length;i++){
     newProduct.push(data[i])
    }
    setproduct(newProduct)
  }

  const hotsale=async()=>{
    const {data}=await get()
    const hotsale=[];
    data.sort((a: any, b: any) => a.discount < b.discount ? 1 : (b.discount < a.discount ? -1 : 0))
 
    for(let i=0;i<data.length;i++){
     hotsale.push(data[i])
     if(hotsale.length==5){
         break;
     }
    }
    setproductsale(hotsale)
  }

  //
   useEffect(()=>{
      newProduct(),
      hotsale()
   },[])
  return (
    <div>
        {product?.map((e,index)=>{
            return(
                <div key={index}>
                    <h1>{e.name}</h1>
                </div>
            )
        })}
           {productsale?.map((e,index)=>{
            return(
                <div key={index}>
                    <h1>{e.name}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default HomePage