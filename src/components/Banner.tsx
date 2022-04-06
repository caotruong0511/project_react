import React from 'react'
import "../assets/css/banner.css"
import AOS from "aos";
import Slider from "react-slick";
type Props = {}

const Banner = (props: Props) => {
  return (
  
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active ">
      <img src="https://cdn.pnjwatch.com.vn/Category/45/Banner-DocQuyen-23040x880-3.jpg" className="d-block  w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://donghotinnhiem.com/storage/2020/01/banner.jpg" className="d-block  w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopdongho.com/2018/09/gwnq-specsbanner-1.jpg" className="d-block  w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/88/f3/8f/88f38fe568f7e51006156c253e98138f.jpg" className=" d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://luxshopping.vn/Uploads/UserFiles/images/banner%20dong%20ho%20frederique%20constaint.png" className=" d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
  
</div>


  )
}

export default Banner