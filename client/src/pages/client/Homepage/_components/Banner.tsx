import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="relative">
            <Swiper
                spaceBetween={10} // Thay đổi khoảng cách giữa các slide
                slidesPerView={1} // Số lượng slide hiển thị trên màn hình
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
                    <div className="relative h-[100%]">
                        <img className="w-full h-full object-fit-cover" src="/images/banner_01.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-[100%]">
                        <img className="w-full h-full object-fit-cover" src="/images/banner_02.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-[100%]">
                        <img className="w-full h-full object-fit-cover" src="/images/banner_03.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
