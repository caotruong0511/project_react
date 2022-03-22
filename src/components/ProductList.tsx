import React from 'react'
import { ProductType } from '../types/product'

type ProductProps = {
products:ProductType[];
}

const ProductList = ({products}: ProductProps) => {

  return (
    
    <div>
        <div className="row">
        {products?.map((e,index)=>{
         
        return (
          <div className="col-3" key={index}> 
           <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{e.name}</h5>
    <p className="card-text">{e.price.toLocaleString() }</p>
    <a href={`/product/${e._id}`} className="btn btn-primary">Chi tiết</a>
  </div>
</div>

            </div>
        )
        })}
       
        </div>
    </div>
  )
}

export default ProductList