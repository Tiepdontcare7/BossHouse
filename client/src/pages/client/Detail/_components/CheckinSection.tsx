
import { useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CustomerCheckin = () => {

    const [slides, setSlides] = useState(
        Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
    );


    return (
        <section className='my-[30px] pb-[60px] bg-blue-100  '>
            <div className="flex justify-center section-title-container text-center p-4 uppercase">
                <h2 className="section-title section-title-center flex">
                    <p className="section-title-main w-full text-[#d69704] text-2xl font-medium">Khách hàng checkin</p>

                </h2>
            </div>
            <div className="swiper w-[90%]">
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={() => setSlides}
                    slidesPerView={4}
                    centeredSlides={false}
                    spaceBetween={30}
                    pagination={{
                        type: 'custom',
                    }}
                    navigation={true}
                    virtual={false}
                >
                    {slides.map((slideContent, index) => (
                        <SwiperSlide className='' key={slideContent} virtualIndex={index}>
                            <div className='text-center'>
                                <img className='rounded-md' src="https://chomeocanh.com/wp-content/uploads/2020/03/khach-hang-dogily-petshop-meo-aln-tai-cup.jpg" alt="" />
                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>


            </div>


        </section >
    )
}

export default CustomerCheckin