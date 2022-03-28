import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getone } from '../api/category'

import { ProductType } from '../types/product'

type Props = {}

const Categories = (props: Props) => {
  const {id} = useParams();
  console.log(id)
  const [cate,getcate] = useState<ProductType[]>([])
   useEffect(()=>{
    const category=async()=>{
      const {data} = await getone(id)
      getcate(data.products)
       }
       category()
   },[])
  return (
    <div>
      {cate?.map((e,index)=>{
      return(
      <h1 key={index}>{e.name}</h1>
      )
      }
     )}
    </div>
  )
}

export default Categories