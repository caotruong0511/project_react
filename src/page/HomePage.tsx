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
    console.log(data)
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
      <div className="w-5/6 m-auto ">
      <div className="flex justify-around ">
      <div className="border border-black">
      <h1 className="font-bold text-xl text-center">Giao hàng nhanh chóng</h1>
    <img data-aos="fade-up"
                data-aos-offset="150"
                data-aos-delay={`${duration}`}
                data-aos-duration="1000" src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648780660/samples/animals/download_exuixm.png" alt="" />
  </div>
  <div className="border border-black">
    <h1 className="font-bold text-xl text-center">Giao hàng nhanh chóng</h1>
    <img data-aos="fade-right"
                data-aos-offset="150"
                data-aos-delay={`${duration}`}
                data-aos-duration="1000" className="w-2/3" src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648747582/samples/animals/dich_vu_giao_hang_nhanh_gia_re1_xknmjv.png" alt="" />
  </div>
  <div className="border border-black bg-blue-500">
    <img data-aos="fade-up"
                data-aos-offset="150"
                data-aos-delay={`${duration}`}
                data-aos-duration="1000" src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648781853/samples/animals/images_6_d2s0ew." alt="" />
  </div>
</div>
  
        <h2 className="font-bold text-3xl  my-10 "> SẢN PHẨM MỚI </h2>
        <div className="grid grid-cols-4 gap-11">
          {product?.map((e: any, index) => {
            duration += 200;
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
                <Link to={`/product/${e._id}`} className=""><button className="border border-black w-11/12 m-auto block mt-3 bg-red-500 text-white font-bold py-1">
                  Xem ngay
                </button></Link>
                
              </div>
            );
          })}
        </div>
      </div>
      {/* img */}
      <div className="grid grid-cols-2 my-20 ">
        <img className="boy" src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648801734/assm/bst-dong-ho-cho-nam_1562154973_dlfcph.jpg" alt="" />
     <div>
        <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648801735/assm/bst-danh-cho-nu_1562151982_j92pdt.jpg" alt="" />
        <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648801740/assm/dong-ho-cap-doi_1593660350_pou7qi.jpg" alt="" />
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
                <button className="border border-black w-11/12 m-auto block mt-3 bg-red-500 text-white font-bold py-1">
                  Xem ngay
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    
    </div>
    
  );
};

export default HomePage;
