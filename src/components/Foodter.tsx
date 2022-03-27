import React from 'react'

type Props = {}

const Foodter = (props: Props) => {
  return (
    <div>
        <div className="bg-zinc-700">
                <div className="w-11/12 m-auto">
                    <div className="text-white flex flex-col justify-center items-center py-10">
                        <h3 className="text-center my-3 text-bold text-2xl">Tham gia cùng chúng tôi</h3>
                        <input type="text" className="text-black w-1/3 m-auto py-1 indent-2" placeholder="Nhập email tại đây..."/>
                        <button className="border border-black w-1/3 m-auto my-3 py-1 bg-black">ĐĂNG KÝ</button>
                    </div>
                    <div className="text-white grid grid-cols-4">
                        <div className="w-10/12">
                            <h4 className="font-bold text-xl text-white">Liên hệ</h4>
                            <ul>
                                <li className="mt-3">CÔNG TY CỔ PHẦN TRỰC TUYẾN GERME</li>
                                <li className="mt-3">VPGD: 80/47 Xuân phương - Nam Từ Liêm - Hà Nội</li>
                                <li className="mt-3">Hotline: 1800 6005</li>
                                <li className="mt-3">youthwatchs@gmail.com</li>
                            </ul>
                        </div>
                        <div className="w-10/12">
                            <h4 className="font-bold text-xl text-white">Hỗ trợ</h4>
                            <ol>
                                <li className="mt-3"><a href="">1: Chính sách bảo hành</a></li>
                                <li className="mt-3"><a href="">2: Chính sách đổi trả</a></li>
                                <li className="mt-3"><a href="">3: Chính sách bảo mật</a></li>
                                <li className="mt-3"><a href="">4: Chính sách vận chuyển</a></li>
                                <li className="mt-3"><a href="">5: Chính sách thanh toán</a></li>
                            </ol>
                        </div>
                        <div className="w-10/12">
                            <h4 className="font-bold text-xl text-white">Về chúng tôi</h4>
                            <ul>
                                <li className="mt-3">
                                Với hơn 20 cửa hàng trải dài cả nước, Youth hy vọng sẽ mang đến sự phục vụ chu đáo cho tất cả các khách hàng. Hệ thống cửa hàng thời trang Youth luôn luôn lắng nghe những ý kiến đóng góp từ các khách hàng với mục tiêu đẩy mạnh dịch vụ, mở rộng hệ thống và làm hài lòng những vị khách đến trên toàn quốc.</li>
                            </ul>
                        </div>
                        <div className="w-10/12 mb-10">
                            <h4 className="font-bold text-xl text-white">Theo dõi chúng tôi</h4>
                            <iframe src=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Foodter