import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; const Chains = () => {
    return <>
        <section className="section-chains grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 grid-cols-1 relative  bg-blue-100 h-auto border">
            <div className="time flex items-center justify-center col-span-2">
                <div className="text-center mt-20">
                    <h4 className="font-bold text-3xl  text-[#000] ">GIỜ MỞ CỬA:</h4>
                    <p className='py-4'>8am - 10pm<br />
                        Tất cả các ngày trong tuần</p>
                    <p className='xl:w-[400px] w-[300px]'>Hãy ghé BossHouse : Nơi giúp bạn có nhiều thông tin bổ ích trong việc  nuôi chó mèo, chăm sóc thú cưng tại gia đình. !</p>
                    <p className="text-[22px] py-4 text-[#000] font-semibold">— — — —<br />
                        HOTLINE:<br />
                        0923.069.069</p>
                </div>
            </div>
            <div className="swiper relative col-span-3 m-20 h-full mx-[15px]">
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
                            <img className=" w-full h-[500px] object-cover" src="/images/img_v1.png" alt="" />
                            <div className=" box-address rounded-lg absolute text-white text-center bg-gray-950  top-1/2 left-1/2 transform -translate-x-1/2  bg-opacity-70 py-2 px-6">

                                <h3 className="text-xl p-3"><strong>HỆ THỐNG BOSSHOUSE</strong></h3>
                                <p className='text-xs p-3'>Địa chỉ 1:  223 Phúc Diễn - Bắc Từ Liêm - Hà Nội</p>
                                <hr />
                                <div className="order p-2 grid grid-cols-2 gap-2">
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >HOTLINE</a>
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >ZALO</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative rounded-xl overflow-hidden'>
                            <img className=" w-full h-[500px] object-cover" src="/images/img_v2.png" alt="" />
                            <div className=" box-address rounded-lg absolute text-white text-center bg-gray-950  top-1/2 left-1/2 transform -translate-x-1/2  bg-opacity-70 py-2 px-6">

                                <h3 className="text-xl p-3"><strong>HỆ THỐNG BOSSHOUSE</strong></h3>
                                <p className='text-xs p-3'>Địa chỉ 2: 125 Chương Mỹ - Hà Đông - Hà Nội</p>
                                <hr />
                                <div className="order p-2 grid grid-cols-2 gap-2">
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >HOTLINE</a>
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >ZALO</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-full w-full rounded-xl overflow-hidden'>
                            <img className=" w-full h-[500px] object-cover" src="/images/img_v3.png" alt="" />
                            <div className=" box-address rounded-lg absolute text-white text-center bg-gray-950  top-1/2 left-1/2 transform -translate-x-1/2   bg-opacity-70 py-2 px-6">
                                <h3 className="text-xl p-3"><strong>HỆ THỐNG BOSSHOUSE</strong></h3>
                                <p className='text-xs p-3'>Địa chỉ 3:  32 Cầu Giấy - Hà Nội</p>
                                <hr />
                                <div className="order p-2 grid grid-cols-2 gap-2">
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >HOTLINE</a>
                                    <a href="" className=" w-full font-bold text-xs text-white inline-block bg-transparent border-2  border-white  py-2 rounded-full transition duration-300 hover:bg-white hover:text-black px-2" >ZALO</a>
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