import React, { useEffect, useRef, useState } from "react";
import { get } from "../api/Product";
import { ProductType } from "../types/product";
import "../assets/css/home.css";
import AOS from "aos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

type ProductProps = {};

const HomePage = (props: ProductProps) => {
  const [product, setproduct] = useState<ProductType[]>([]);
  const [productsale, setproductsale] = useState<ProductType[]>([]);
  let duration: number = 0;
  let settings = {
    infinity: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
  }

  const newProduct = async () => {
    const { data } = await get();
    const newProduct = [];
    for (let i = data.length - 8; i < data.length; i++) {
      newProduct.push(data[i]);
    }
    setproduct(newProduct);
  };

  const hotsale = async () => {
    const { data } = await get();
    const hotsale = [];
    data.sort((a: any, b: any) =>
      a.discount < b.discount ? 1 : b.discount < a.discount ? -1 : 0
    );

    for (let i = 0; i < data.length; i++) {
      hotsale.push(data[i]);
      if (hotsale.length == 5) {
        break;
      }
    }
    setproductsale(hotsale);
  };

  // 
  useEffect(() => {
    AOS.init(), newProduct(), hotsale();
  }, []);

  //currencyformat
  const currencyformat = (data: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(data);
  };

  //
  return (
    <div>
       <Banner/>
      <div className="w-5/6 m-auto ">
        <h2  className="new font-bold text-3xl my-10 "> SẢN PHẨM MỚI </h2>
        <div className="grid grid-cols-4 gap-11">
          {product?.map((e: any, index) => {
            duration += 100;
            return (
              <div
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay={`${duration}`}
                data-aos-duration="500"
                key={index}
                className="border border-black py-10"
              >
                <img src={`${e.img}`} alt="" className="w-3/4 m-auto" />
                <h1 className="font-semibold w-3/4 m-auto text-center mt-2">
                  {e.name}
                </h1>
                <div className="flex mt-4 justify-around">
                  <p className="text-red-500 font-bold">
                    {currencyformat(e.price - (e.price * e.discount) / 100)}
                  </p>
                  <del className="text-sm">
                    {e.discount > 0 ? currencyformat(e.price) : ""}
                  </del>
                </div>
                <Link to={`/product/${e._id}`} className=""><button className="border border-black w-11/12 m-auto block mt-3 bg-slate-700 text-white  py-1">
                  Xem ngay
                </button></Link>
                
              </div>
            );
          })}
        </div>
      </div>
      {/* icon */}
      <div className="box my-10">
      <div className="grid grid-cols-3 m-auto w-2/3">
        
      <div className="box_item ">
      <h1 className="font-bold text-xl text-center">Chất lượng dẫn đầu</h1>
    <img data-aos="flip-down"
                data-aos-offset="150"
                data-aos-delay="400"
                data-aos-duration="500" className="w-28 m-auto py-2 "  src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648813302/assm/kisspng-computer-icons-desktop-wallpaper-guarantee-icon-5b14ce8215d8d3.1912955815280902420895_vr4q3h.png" alt="" />
  </div>
  <div className="box_item border-r-2 border-l-2">
    <h1 className="font-bold text-xl text-center">Giao hàng nhanh chóng</h1>
    <img data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay="400"
                data-aos-duration="500" className=" w-28 m-auto py-2 " src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648818951/assm/kisspng-delivery-vector-graphics-courier-computer-icons-ma-smoke-supplies-canada-page-2-all-your-smoke-su-5c46b24ab62cd8.0305070415481370347462_qt93rw.png" alt="" />
  </div>
  <div className="box_item">
  <h1 className="font-bold text-xl text-center">Bảo hành toàn quốc</h1>
    <img data-aos="flip-down"
                data-aos-offset="150"
                data-aos-delay="400"
                data-aos-duration="500" className="w-28 m-auto py-2 " src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648818261/assm/5a220dc1a97444.4336082815121811856941_xcevgf.png" alt="" />
  </div>
</div>
</div>
      {/* img */}
      <div className="model">
        <div className="product_boy">
        <img className="boy" src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648801734/assm/bst-dong-ho-cho-nam_1562154973_dlfcph.jpg" alt="" />
        <Link to={`/product/model/1`}><p className="boy_text">ĐỒNG HỒ DÀNH CHO NAM</p></Link>
        </div>
     <div>
        <div className="collection_name">
        <img className="girl" src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648801735/assm/bst-danh-cho-nu_1562151982_j92pdt.jpg" alt="" />
        <Link to={`/product/model/0`}><p className="collection">ĐỒNG HỒ DÀNH CHO NỮ</p></Link>
        </div>
        <div className="collection_name">
        <img className="girl" src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648801740/assm/dong-ho-cap-doi_1593660350_pou7qi.jpg" alt="" />
        <Link to={`/product/model/2`}><p className="couple">ĐỒNG HỒ CẶP ĐÔI</p></Link>
        </div>
        </div>
      </div>
      <div className="w-5/6 m-auto ">
        <h2 className="font-bold text-3xl  my-10 "> SẢN PHẨM SALE </h2>
        <Slider {...settings}>
          {productsale?.map((e: any, index) => {
            return (
              <div key={index} className=" py-10 relative">
                <div className="bg-red-500 w-1/5 absolute top-0 left-0 text-white">
                  <span className="text-center block">{e.discount} %</span>
                </div>
                <img src={`${e.img}`} alt="" className="w-3/4 m-auto" />
                <h1 className="font-semibold w-3/4 m-auto text-center mt-2">
                  {e.name}
                </h1>
                <div className="flex mt-4 justify-around">
                  <p className="text-red-500 font-bold">
                    {currencyformat(e.price - (e.price * e.discount) / 100)}
                  </p>
                  <del className="text-sm">
                    {e.discount > 0 ? currencyformat(e.price) : ""}
                  </del>
                </div>
                <Link to={`/product/${e._id}`} className=""><button className="border border-black w-11/12 m-auto block mt-3 bg-slate-700 text-white  py-1">
                  Xem ngay
                </button></Link>
              </div>
            );
          })}
        </Slider>
      </div>
    
    </div>
    
  );
};

export default HomePage;
