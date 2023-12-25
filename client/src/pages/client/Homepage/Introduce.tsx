const Introduce = () => {
    return (
        <section className="bg-white py-16">
            <div className="text-center">
                <h2 className="font-bold text-3xl mb-4 text-[#f2b10b]">GIỚI THIỆU</h2>
                <div>
                    <img className="block mx-auto" src="/images/ngoi-sao.jpg" alt="" />
                </div>
            </div>
            <div className="grid md:grid-cols-2  max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 gap-5 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-lg font-bold tracking-tight leading-none md:text-3xl xl:text-2xl ">
                        Câu chuyện thương hiệu BossHouse 
                    </h1>
                    <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-lg ">
                    BossHouse là thương hiệu thuộc lĩnh vực dịch vụ thú cưng và các loại phụ kiện vật nuôi tại nước ta hiện nay.
                    Với slogan “My Dog is family, my dog is not a pet” mang ý nghĩa rằng: “Chó là thành viên trong gia đình, không chỉ là thú cưng”. BossHouse cam kết luôn đặt sức khỏe và cuộc sống của các bé chó mèo lên trên hết trong toàn bộ hoạt động của thương hiệu.
                    
                    </p>
                </div>
                <div className=" lg:mt-0 lg:col-span-5 lg:flex xl:w-full lg:w-full md:w-full w-full ">
                    <img src="/images/gioithieu.jpg" alt="mockup" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default Introduce;
