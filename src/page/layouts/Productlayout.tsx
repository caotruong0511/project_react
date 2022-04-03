import React from 'react'
import { Outlet } from 'react-router-dom'
import Asidewed from '../../components/Asidewed'
import "../../assets/css/home.css"
type Props = {}

const Productlayout = (props: Props) => {
  return (
    <div>
      <hr className='mb-8' />
    <div className='aside'>
        <aside>
            <Asidewed/>
        </aside>
        <div>
        <div id="carouselExampleControls" className="carouselExampleControls carousel slide" data-bs-ride="carousel">
   
  <div  className="subbanner carousel-inner">
    <div className="carousel-item active ">
      <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648977300/samples/animals/800-200-800x200-16_prwqj8.png" className="d-banner  " alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648977307/samples/animals/1623925782-800-200-800x200-93_it9sny.png" className="d-banner " alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648977300/samples/animals/800-200-800x200-133_6265bffb48_xfbrce.png" className="d-banner  " alt="..." />
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
        <Outlet/>
        </div>
    </div>
    </div>
  )
}

export default Productlayout