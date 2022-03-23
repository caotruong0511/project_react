import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes,useNavigate } from 'react-router-dom'
import Websitelayout from './page/layouts/Websitelayout'
import { ProductType } from './types/product'
import axios from 'axios'
import ProductList from './components/ProductList'
import Detail from './page/Detail'
import Adminlayout from './page/layouts/Adminlayout'
import ProductManager from './page/ProductManager'
import { add, get, remove, update } from './api/Product'
import Productadd from './page/Productadd'
import Productedit from './page/Productedit'


function App() {
  const [product, setProduct] = useState<ProductType[]>([])
useEffect(()=>{
const getproduct=async ()=>{
  const {data}= await get();
  setProduct(data)
}
getproduct()

},[])
const onHandlerRemove=async(_id:number|string)=>{
remove(_id)
  
setProduct(product.filter(item=>item._id!== _id))
}
const onHandleradd=async(products:ProductType)=>{
  const {data}= await add(products);
  
setProduct([...product,data])
}

const onHandlerupdate=(products:ProductType)=>{
const productedit=async()=>{
  const {data}= await update(products);
setProduct(product.map(item=>item._id=== data.id ? products :item))

}
productedit();
}
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Websitelayout/>}>
          <Route index element={<h1>Home page</h1>} />
          <Route path='product' element={<ProductList products={product} />}/>
          <Route path='/product/:id' element={<Detail/>}/>
           </Route>
           <Route path='/admin'element={<Adminlayout/>}>
             <Route  path='product' element={<ProductManager product={product} onRemove={onHandlerRemove}/>}/>
             <Route  path='/admin/product/add' element={<Productadd onAdd={onHandleradd} />}/>
             <Route  path='/admin/product/:id/edit' element={<Productedit onAdd={onHandlerupdate}/>}/>
           </Route>
      </Routes>
    </div>
  )
}

export default App
