import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getone } from '../api/Product';
import { ProductType } from '../types/product';

type Props = {}

const Detail = (props: Props) => {
    const {id} = useParams();
    
    const [product,setProduct]=useState<ProductType>();
    useEffect(()=>{
        const getProduct=async()=>{
        const {data}= await getone(id)
        setProduct(data)
        }
        getProduct()
    },[])
  return (
    <div>
        <h1>{product?.name}</h1>
        <h1>{product?.price}</h1>
    </div>
  )
}

export default Detail