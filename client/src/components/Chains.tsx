import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; const Chains = () => {
    return <>
        <section className="section-chains grid grid-cols-5 relative bg-[url('/images/bg-ar.jpg')] bg-contain h-[600px]">
            <div className="time flex items-center justify-center col-span-2">
                <div className="text-center">
                    <div className="text">
                        <h4 className="text-3xl text-[#ffa300] font-semibold">GIỜ MỞ CỬA:</h4>
                        <p className='py-7'>7am - 11pm<br />
                            Tất cả các ngày trong tuần</p>
                        <p >Hãy ghé Bee để thưởng thức hương vị độc đáo<br />
                            của trà và cà phê ngay nhé!</p>
                        <p className="text-[22px] py-7 text-[#ffa300] font-semibold">———–———–<br />
                            HOTLINE:<br />
                            0923.069.069</p>

                    </div>

                </div>
            </div>
            <div className="swiper relative col-span-3 m-10 h-full">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='relative rounded-xl overflow-hidden'>
                            <img className=" w-full h-[500px] object-cover" src="/images/IMG-QUAN-BEE-V1.jpg" alt="" />
                            <div className=" box-address rounded-lg absolute text-white text-center bg-gray-950  top-1/2 left-1/2 transform -translate-x-1/2  bg-opacity-70 py-3 px-6">

                                <h3 className="text-xl p-3"><strong>HỆ THỐNG BEETEACOFFEE</strong></h3>
                                <p className='text-xs p-3'>Địa chỉ 1:  223 Phúc Diễn - Bắc Từ Liêm - Hà Nội</p>
                                <hr />
                                <div className="order p-2 grid grid-cols-2 gap-2">
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >SHOPEE FOOD</a>
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >GRAB FOOD</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative rounded-xl overflow-hidden'>
                            <img className=" w-full h-[500px] object-cover" src="/images/IMG-QUAN-BEE-V2.jpg" alt="" />
                            <div className=" box-address rounded-lg absolute text-white text-center bg-gray-950  top-1/2 left-1/2 transform -translate-x-1/2  bg-opacity-70 py-3 px-6">

                                <h3 className="text-xl p-3"><strong>HỆ THỐNG BEETEACOFFEE</strong></h3>
                                <p className='text-xs p-3'>Địa chỉ 2: 125 Chương Mỹ - Hà Đông - Hà Nội</p>
                                <hr />
                                <div className="order p-2 grid grid-cols-2 gap-2">
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >SHOPEE FOOD</a>
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >GRAB FOOD</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-full w-full rounded-xl overflow-hidden'>
                            <img className=" w-full h-[500px] object-cover" src="/images/IMG-QUAN-BEE-V3.jpg" alt="" />
                            <div className=" box-address rounded-lg absolute text-white text-center bg-gray-950  top-1/2 left-1/2 transform -translate-x-1/2   bg-opacity-70 py-3 px-6">
                                <h3 className="text-xl p-3"><strong>HỆ THỐNG BEETEACOFFEE</strong></h3>
                                <p className='text-xs p-3'>Địa chỉ 3:  32 Cầu Giấy - Hà Nội</p>
                                <hr />
                                <div className="order p-2 grid grid-cols-2 gap-2">
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >SHOPEE FOOD</a>
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >GRAB FOOD</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
}

export default Chains;