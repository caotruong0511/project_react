import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Websitelayout from './page/layouts/Websitelayout'
import { ProductType } from './types/product'
import axios from 'axios'
import ProductList from './components/ProductList'
import Detail from './page/Detail'
import Adminlayout from './page/layouts/Adminlayout'
import ProductManager from './page/ProductManager'
import { get } from './api/Product'

function App() {
  const [product, setProduct] = useState<ProductType[]>([])
useEffect(()=>{
const getproduct=async ()=>{
  const {data}= await get();
  setProduct(data)
}
getproduct()

},[])
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Websitelayout/>}>
          <Route index element={<h1>Home page</h1>} />
          <Route path='product' element={<ProductList products={product} />}/>
          <Route path='/product/:id' element={<Detail/>}/>
           </Route>
           <Route path='/admin'element={<Adminlayout/>}>
             <Route  path='product' element={<ProductManager/>}/>
           </Route>
      </Routes>
    </div>
  )
}

export default App
