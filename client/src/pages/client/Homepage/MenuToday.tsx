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
                <h2 className="font-bold text-3xl mb-4 text-[#f2b10b]">BOSS HOUSE CÓ NHỮNG GÌ</h2>
                <h4 className="font-bold text-base mb-4"> DỊCH VỤ VÀ THỨC ĂN  </h4>
                <div>
                    <img className="block mx-auto" src="/images/ngoi-sao.jpg" alt="" />
                </div>
            </div>
            <div className="xl:mx-[120px] mx-[15px] mt-16">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={15}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        375: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CẮT TỈA LÔNG CHÓ"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/service1.jpg"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CẮT TỈA LÔNG CHÓ</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CẠO LÔNG MÈO"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/service2.jpg"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">CẠO LÔNG MÈO</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="TẮM CHO CHÓ"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5 "
                                src="/images/service3.jpg"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">TẮM CHO CHÓ</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CẮT MÓNG CHÓ MÈO"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5 w-full h-full"
                                src="/images/service4.jpg"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9 xl:mx-[-5px] mx-[-15px] xl:text-base text-sm ">CẮT MÓNG CHÓ MÈO</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="SPA CHÓ MÈO"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/service5.jpg"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9">SPA CHÓ MÈO</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="THỨC ĂN CHO CHÓ "
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/service6.jpg"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9 xl:mx-[-5px] mx-[-15px] xl:text-base text-sm">THỨC ĂN CHO CHÓ </h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="THỨC ĂN CHO MÈO"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/service7.jpg"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9 xl:mx-[-5px] mx-[-15px] xl:text-base text-sm">THỨC ĂN CHO MÈO</h4>
                            <p className="text-red-500 text-sm">Giá từ 120.000 VNĐ - 240.000 VNĐ</p>
                            <button className="bg-[#000]  w-full text-white rounded-sm mt-3 py-[3px] hover:bg-slate-500">
                                Xem
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#f4f2e9] border shadow-2xl border-[#ccc] p-3 rounded-md text-center hover:scale-[1.025] transition-transform ease-linear">
                            <img
                                title="CÁT VỆ SINH CHÓ MÈO"
                                className="cursor-pointer hover:scale-[1.02] transition-transform ease-linear mb-5"
                                src="/images/service8.jpg"
                                alt="Bonnie Avatar"
                            />
                            <h4 className="text-black mb-9 h-auto xl:mx-[-5px] mx-[-15px] xl:text-base text-sm">CÁT VỆ SINH CHÓ MÈO</h4>
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
