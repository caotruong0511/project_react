import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Websitelayout from "./page/layouts/Websitelayout";
import { ProductType } from "./types/product";
import axios from "axios";
import ProductList from "./components/ProductList";
import Detail from "./page/Detail";
import Adminlayout from "./page/layouts/Adminlayout";
import ProductManager from "./page/adminProduct/ProductManager";
import { add, get, getmodel, remove, update } from "./api/Product";
import Productadd from "./page/adminProduct/Productadd";
import Productedit from "./page/adminProduct/Productedit";
import HomePage from "./page/HomePage";
import CateManager from "./page/adminCategoty/CateManager";
import { Category } from "./types/category";
import { list, addcate, removecate, updateCate } from "./api/category";
import Cateadd from "./page/adminCategoty/Cateadd";
import Cateedit from "./page/adminCategoty/Cateaedit";
import Signup from "./page/Signup";
import { UserType } from "./types/user";
import { signin, signup } from "./api/auth";
import Signin from "./page/Signin";
import PrivateRouter from "./components/PrivatrRouter";
import Dashboard from "./page/Dashboard";
import Categories from "./page/category";
import UserManage from "./page/adminUser/userManage";
import { addusers, getuser, putusers, removeuser } from "./api/user";
import Useradd from "./page/adminUser/userAdd";
import AOS from 'aos';

import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Useredit from "./page/adminUser/useredit";

import Search from "./page/Search";
import Productlayout from "./page/layouts/Productlayout";
import Model from "./page/Model";
import Cart from "./page/Cart";
function App() {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [categorys, setcategory] = useState<Category[]>([]);
  const [users, setuser] = useState<UserType[]>([]);
  const [model,setmodel] =useState<ProductType[]>([])
  const navigate = useNavigate();
  
  //call api product
  useEffect(() => {
    const getproduct = async () => {
      const { data } = await get();
      setProduct(data);
    };
    getproduct();
  }, []);
  //remove
  const onHandlerRemove = async (id: number | string) => {
   try {
    remove(id);
    toastr.success("Bạn đã xóa thành công")
    setProduct(product.filter((item) => item._id !== id));
    
   } catch (error) {
     toastr.error("Xóa không thành công")
   }
  };
  //edit
  const onHandlerupdate =async (products: ProductType) => {
    try {
      const apiUrl = "https://api.cloudinary.com/v1_1/dmlv9tzte/image/upload";
      const image = products.img[0];
      const formdata = new FormData();
      formdata.append("file", image);
      formdata.append("upload_preset", "web16309");
      const { data } = await axios.post(apiUrl, formdata, {
        headers: {
          "Content-type": "application/form-data",
        },
      });
 
      const imgproduct = await update({...products,img:data.url});
       
      //item dữ liệu trong mảng product, dât dữ liệu mơi cập nhật
      const newProduct = product.map((item) =>
        item._id === imgproduct.data._id ? products : item
      );
      toastr.success("Cập nhật thành công")
      setProduct(newProduct);
      setTimeout(()=>navigate("/admin/product"),2000)
    } catch (error) {
      toastr.error("Cập nhật thất bại")
    }
    };  
//add 
const onHandleradd = async (products: ProductType) => {
  try {
    const apiUrl = "https://api.cloudinary.com/v1_1/dmlv9tzte/image/upload";
  const image = products.img[0];
  const formdata = new FormData();
  formdata.append("file", image);
  formdata.append("upload_preset", "web16309");
  const { data } = await axios.post(apiUrl, formdata, {
    headers: {
      "Content-type": "application/form-data",
    },
  });
  const addproduct = await add({ ...products, img: data.url });
  toastr.success("Bạn đã thêm sản phẩm thành công") 
  // //...product mảng ban đầu sét vơi product mơis thêm
  setProduct([...product, addproduct.data]);
  setTimeout(()=>navigate("/admin/product"),2000)
  } catch (error) {
    toastr.error("Không thêm được sản phẩm")
  }
};



  //call api category
  useEffect(() => {
    const getcategory = async () => {
      const { data } = await list();
      setcategory(data);
    };
    getcategory();
  }, []);
  //remove  
  const removeCate = async (id: number | string) => {
    try {
      removecate(id);
    toastr.success("Bạn đã xóa thành công")
    setcategory(categorys.filter((item) => item._id !== id));
    } catch (error) {
      toastr.error("Xóa không thành công")
    }
  };
  //edit 
  const updateCategory = (category: Category) => {
    try {
      const cateedit = async () => {
        const { data } = await updateCate(category);
  
        // item dữ liệu trong mảng product, dât dữ liệu mơi cập nhật
        const newProduct = categorys.map((item) =>
          item._id === data._id ? category : item
        );
        toastr.success("Cập nhật thành công")
        setcategory(newProduct);
      };
      cateedit();
      setTimeout(()=>navigate("/admin/categories"),3000)
    } catch (error) {
      toastr.error("Cập nhật thất bại")
    }
    
  };
  //add 
  const addCate = async (category: Category) => {
    try {
      const { data } = await addcate(category);
    toastr.success("Thêm mới thành công")
    setcategory([...categorys, data]);
    setTimeout(()=>navigate("/admin/categories"),3000)
    } catch (error) {
      toastr.error("Không thêm được danh mục")
    }
  };
 


// call api category
useEffect(()=>{
  const userlist=async()=>{
 const {data} =await getuser();
  setuser(data)
  }
  userlist()
},[])
//remove
const deleteuser=(id:number|string)=>{
try {
  removeuser(id)
toastr.success("Bạn đã xóa thành công")
setuser(users.filter(item=>item._id!==id))
} catch (error) {
  toastr.error("Xóa không thành công")
}
}
//add
const adduser=async(user:UserType)=>{
try {
  const {data}=await addusers(user);
  toastr.success("Bạn đã thêm tài khoản thành công")
 setuser([...users,data])
 setTimeout(()=>navigate("/admin/users"),2000)
} catch (error) {
  toastr.error("Thêm không thành công")
}
}
//update
const updateuser=async(user:UserType)=>{
try {
  const {data}= await putusers(user)
const newuser=users.map((item)=>item._id===data._id?user:item)
toastr.success("Cập nhật thành công")
setuser(newuser)
setTimeout(()=>navigate("/admin/users"),2000)
} catch (error) {
  toastr.error("Cập nhật thất bại")
}
}



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Websitelayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<Productlayout/>}>
          <Route index element={<ProductList products={product} />} />
          <Route path="category/:id" element={<Categories />} />
          <Route path="/product/model/:id" element={<Model />} />
          <Route path="/product/search/:search_value" element={<Search />} />
          </Route>
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="admin" element={<PrivateRouter><Adminlayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<ProductManager product={product} onRemove={onHandlerRemove} />}/>
          <Route path="categories"element={<CateManager category={categorys} onRemove={removeCate} />}/>
          <Route path="/admin/product/add" element={<Productadd onAdd={onHandleradd} />}/>
          <Route path="/admin/categories/add" element={<Cateadd onAdd={addCate} />} />
          <Route path="/admin/product/:id/edit" element={<Productedit onUpdate={onHandlerupdate} />} />
          <Route path="/admin/categories/:id/edit" element={<Cateedit onUpdate={updateCategory} />} />
          <Route path="/admin/users" element={<UserManage user={users} onRemove={deleteuser}/>}/>
          <Route path="/admin/user/add"  element={<Useradd onAdd={adduser} />}  />
          <Route path="/admin/user/:id/edit"  element={<Useredit onAdd={updateuser} />}  />
        </Route>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
