import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648716571/samples/animals/banner1_gkwhcn.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648716571/samples/animals/banner2_uo61of.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648716571/samples/animals/banner3_q5y1ig.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648716571/samples/animals/banner5_l84q58.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dmlv9tzte/image/upload/v1648716571/samples/animals/banner34_i85jrm.png" className="d-block w-100" alt="..." />
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