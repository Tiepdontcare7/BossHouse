import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const MenuToday = () => {
    return (
        <section className="py-16 bg-[#f5f1dd]">
            <div className="text-center">
                <h2 className="font-bold text-4xl mb-4 text-[#f2b10b]">MENU HÔM NAY</h2>
                <h4 className="font-bold text-base mb-4">HÔM NAY MENU NHÀ BEE CÓ: </h4>
                <div>
                    <img className="block mx-auto" src="/images/ngoi-sao.jpg" alt="" />
                </div>
            </div>
            <div className="xl:mx-[120px] mx-[50px] mt-16">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CÀ PHÊ HẠT RANG BEE"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/Dong-Ca-Phe-Hat-Rang-1.png"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CÀ PHÊ HẠT RANG BEE</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CÀ PHÊ HẠT RANG BEE"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/Dong-Ca-Phe-Hat-Rang-1.png"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CÀ PHÊ HẠT RANG BEE</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CÀ PHÊ HẠT RANG BEE"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/Dong-Ca-Phe-Hat-Rang-1.png"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CÀ PHÊ HẠT RANG BEE</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CÀ PHÊ HẠT RANG BEE"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/Dong-Ca-Phe-Hat-Rang-1.png"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CÀ PHÊ HẠT RANG BEE</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CÀ PHÊ HẠT RANG BEE"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/Dong-Ca-Phe-Hat-Rang-1.png"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CÀ PHÊ HẠT RANG BEE</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CÀ PHÊ HẠT RANG BEE"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/Dong-Ca-Phe-Hat-Rang-1.png"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CÀ PHÊ HẠT RANG BEE</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CÀ PHÊ HẠT RANG BEE"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/Dong-Ca-Phe-Hat-Rang-1.png"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CÀ PHÊ HẠT RANG BEE</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CÀ PHÊ HẠT RANG BEE"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/Dong-Ca-Phe-Hat-Rang-1.png"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CÀ PHÊ HẠT RANG BEE</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* </div> */}
        </section>
    );
};

export default MenuToday;
